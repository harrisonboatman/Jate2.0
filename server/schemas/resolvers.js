const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order, Contact } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate({
        path: "orders",
        populate: {
          path: "products",
          model: "Product",
        },
      });
    },
    orders: async () => {
      return await Order.find()
        .populate({
          path: "products",
          populate: "category",
        })
        .populate("user");
    },
    ordersByStatus: async (parent, { status }) => {
      return await Order.find({status: status})
        .populate({
          path: "products",
          populate: "category",
        })
        .populate("user");
    },

    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    contacts: async () => {
      return await Contact.find()
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .populate({ path: "orders", populate: "products" })
          .populate({ path: "orders.products", populate: "category" });

        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await Order.findById(_id)
        .populate({ path: "products", populate: "category" })
        .populate("user")

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addProduct: async (parent, args, context) => {
      const product = await Product.create(args);
      return product;
    },
    addContact: async (parent, args, context) => {
      const contact = await Contact.create(args);
      return contact;
    },
    addOrder: async (parent, { products, user }, context) => {
      if (context.user) {
        user = context.user._id;
        const order = new Order({ products });
        order.user = user;
        console.log(order, user);
        await order.save();

        await User.findByIdAndUpdate(
          context.user._id,
          {
            $push: { orders: order._id },
          },
          { new: true }
        );

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUserToManager: async (parent, args, context) => {
      return await User.findByIdAndUpdate(
        args._id,
        { $set: { userType: "manager" } },
        { new: true }
      );
    },
    updateUserToWhatever: async (parent, args, context) => {
      return await User.findByIdAndUpdate(
        args._id,
        { $set: { userType: args.userType.toLowerCase() } },
        { new: true }
      );
    },
    updateOrderToWhatever: async (parent, args, context) => {
      return await Order.findByIdAndUpdate(
        args._id,
        { $set: { status: args.status.toLowerCase() } },
        { new: true }
      );
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    deleteorder: async (parent, { _id }, context) => {
      // if (context.user.userType) {
        const order = await Order.findByIdAndDelete(_id)

        return order;
      // }

      // throw new AuthenticationError("You are not a manager");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      console.error(email, password);

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
