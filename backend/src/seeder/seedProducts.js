require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const connectDB = require('../config/db');

const products = [
  { name: 'Wireless Mouse', price: 599, description: 'Smooth and ergonomic mouse.' },
  { name: 'Gaming Keyboard', price: 1299, description: 'RGB backlight mechanical keyboard.' },
  { name: 'USB-C Cable', price: 199, description: '1m fast charging cable.' },
  { name: 'Laptop Stand', price: 899, description: 'Adjustable aluminum laptop stand.' },
  { name: 'Bluetooth Speaker', price: 1499, description: 'Portable wireless speaker.' },
  { name: 'Webcam', price: 799, description: '1080p HD webcam for meetings.' },
  { name: 'Power Bank', price: 999, description: '10,000mAh power bank.' },
  { name: 'Pen Drive', price: 499, description: '32GB USB 3.0 pen drive.' },
  { name: 'HDMI Cable', price: 299, description: '2m high-speed HDMI cable.' },
  { name: 'LED Lamp', price: 699, description: 'Desk lamp with touch control.' },
];

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // clear existing data
    await Product.insertMany(products);
    console.log('✅ Product data seeded!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
