require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productsRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const checkoutRoute = require('./routes/checkout');
const cartController = require("./controllers/cartController");
const checkoutController = require("./controllers/checkoutController");

checkoutController.setCartReference(cartController.__getCartRef());


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productsRoute);
app.use('/api/cart', cartRoute); 
app.use('/api/checkout', checkoutRoute);


app.get('/', (req, res) => {
  res.send('Mock E-Commerce API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


