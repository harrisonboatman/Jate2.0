const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Breakfast Tacos' },
    { name: 'Dinner Tacos' },
    { name: 'Non Alcoholic Drinks' },
    { name: 'Alcoholic Drinks' },
    { name: 'Sides' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Bacon and Egg',
      description:
        'Crispy bacon with scrambled eggs, all wrapped in a warm flour tortilla.',
      price: 2.99,
      image: 'bacon-egg.png',
      category: categories[0]._id,
      quantity: 500
    },
    {
      name: 'Sausage and Egg',
      description:
        'Juicy sausage with scrambled eggs and melted shredded cheese, all wrapped in a warm flour tortilla.',
      price: 3.49,
      image: 'sausage-egg.png',
      category: categories[0]._id,
      quantity: 450
    },
    {
      name: 'Potato and Egg',
      description:
        'Diced potatoes with scrambled eggs and melted shredded cheese, all wrapped in a warm flour tortilla.',
      price: 3.49,
      image: 'potato-egg.png',
      category: categories[0]._id,
      quantity: 400
    },
    {
      name: 'Chorizo and Egg',
      description:
        'Savory Mexican sausage with scrambled eggs and diced potatoes, all wrapped in a warm flour tortilla.',
      price: 3.99,
      image: 'chorizo.png',
      category: categories[0]._id,
      quantity: 350
    },
    {
      name: 'Migas',
      description:
        'Scrambled eggs with crispy tortilla strips, diced tomatoes, jalapenos, and melted shredded cheese, all wrapped in a warm flour tortilla.',
      price: 4.49,
      image: 'migas.png',
      category: categories[0]._id,
      quantity: 300
    },
    {
      name: 'Steak and Egg',
      description:
        'Juicy steak with scrambled eggs, diced potatoes, and melted shredded cheese, all wrapped in a warm flour tortilla.',
      price: 5.49,
      image: 'steak-egg.png',
      category: categories[0]._id,
      quantity: 250
    },
    {
      name: 'Al Pastor',
      description:
        '3 Marinated pork with diced pineapple, diced onions, and fresh cilantro, all served in a warm corn tortilla.',
      image: 'pastor.png',
      category: categories[1]._id,
      price: 9.49,
      quantity: 400
    },
    {
      name: 'Barbacoa',
      description:
        'Slow-cooked beef with diced onions and fresh cilantro, all served in a warm corn tortilla.',
      image: 'barbacoa.png',
      category: categories[1]._id,
      price: 4.49,
      quantity: 350
    },
    {
      name: 'Fish',
      description:
        'Battered and fried white fish with shredded cabbage, diced tomatoes, and tangy white sauce, all served in a warm flour tortilla.',
      image: 'fish.png',
      category: categories[1]._id,
      price: 5.49,
      quantity: 250
    },
    {
      name: 'Shrimp',
      description:
        'Sauteed shrimp with shredded cabbage, diced tomatoes, and tangy white sauce, all served in a warm flour tortilla.',
      image: 'shrimp.png',
      category: categories[1]._id,
      price: 5.99,
      quantity: 200
    },
    {
      name: 'Margarita',
      description:
        'Tequila, lime juice, and triple sec, served on the rocks with a salt rim.',
        image: 'marg.jpg',
        category: categories[3]._id,
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Mojito',
      description:
        'Rum, lime juice, mint leaves, and soda water, served on the rocks.',
        image: 'mojito.jpg',
        category: categories[3]._id,
      price: 8.99,
      quantity: 80
    },
    {
      name: 'Domestic Beer',
      description:
        'Bottled domestic beers: Bud-Lite, Miller-Lite, Shiner Bock, Voodoo Ranger',
        image: 'beer.jpg',
        category: categories[3]._id,
      price: 3.99,
      quantity: 400
    },
    {
      name: 'Imported Beer',
      description:
        'Bottled imported beers: Corona, Dos Equis, Modelo, Pacifico, Presidente',
        image: 'beers.jpg',
        category: categories[3]._id,
      price: 3.99,
      quantity: 400
    },
      {
        name: "Canned Soda",
        description: "Assorted carbonated soft drinks.",
        image: 'coke.jpg',
        category: categories[2]._id,
        price: 1.99,
        quantity: 150
      },
      {
        name: "Coffee",
        description: "Freshly brewed coffee.",
        image: 'coffee.jpg',
        category: categories[2]._id,
        price: 2.99,
        quantity: 100
      },
      {
        name: "Horchata",
        description: "A refreshing Mexican drink made with rice, cinnamon, and vanilla.",
        image: 'horchata.jpg',
        category: categories[2]._id,
        price: 4.99,
        quantity: 60
      },
      {
        name: "Mexican Coke",
        description: "Coca-Cola made in Mexico with real cane sugar.",
        image: 'mexican-coke.jpg',
        category: categories[2]._id,
        price: 3.99,
        quantity: 90
      },
      {
        name: "Chips and Salsa",
        description: "A basket of warm, crispy tortilla chips, with our fresh homemade salsa ",
        image: 'salsa.jpg',
        category: categories[4]._id,
        price: 3.99,
        quantity: 200
      },
      {
        name: "Chips and Queso",
        description: "A creamy blend of melted cheese, jalapeños, and spices served with tortilla chips.",
        image: 'queso.jpg',
        category: categories[4]._id,
        price: 6.99,
        quantity: 150
      },
      {
        name: "Chips and Guacamole",
        description: "Freshly made guacamole with ripe avocados, diced tomatoes, onions, and cilantro served with tortilla chips.",
        image: 'guac.jpg',
        category: categories[4]._id,
        price: 5.99,
        quantity: 120
      },
      {
        name: "Charro Beans",
        description: "Slow-cooked Charro beans seasoned with garlic, onions, and spices.",
        image: 'beans.jpg',
        category: categories[4]._id,
        price: 2.99,
        quantity: 100
      },
      {
        name: "Mexican Rice",
        description: "Slow-cooked mexican rice seasoned with garlic, onions, and spices.",
        image: 'rice.jpg',
        category: categories[4]._id,
        price: 2.99,
        quantity: 100
      }
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    userType: 'customer'
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    userType: 'manager'
  });

  console.log('users seeded');

  process.exit();
});
