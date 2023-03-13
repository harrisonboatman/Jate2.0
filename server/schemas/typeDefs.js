const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    status: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    userType: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    users: [User]
    orders: [Order]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    updateUserToManager(_id: ID!, userType: String!): User
    updateUserToWhatever(_id: ID!, userType: String!): User
    addProduct(name: String!, description: String!, price: Float!, category: [ID]!): Product
    updateOrderToWhatever(_id: ID!, status: String!): Order
  }
`;

module.exports = typeDefs;
