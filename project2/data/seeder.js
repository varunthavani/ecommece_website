const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product.js");
const User = require("../models/User.js");
const Cart = require("../models/Cart.js")
const products = require("../data/products.js");

dotenv.config();

const seedData = async () => {
  try {
    // connect DB
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

    // delete old data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // create admin user
    const createdUser = await User.create({
      name: "test",
      email: "test@gmail.com",
      password: "1234567",
      role: "admin"
    });

    const userId = createdUser._id;

    // add user field to products
    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });

    // insert products
    await Product.insertMany(sampleProducts);

    console.log("Products seeded successfully!");
    process.exit();

  } catch (error) {
    console.log("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();