const mockProducts = [
  { id: 1, name: "Wireless Mouse", price: 599 },
  { id: 2, name: "Gaming Keyboard", price: 1299 },
  { id: 3, name: "USB-C Cable", price: 199 },
  { id: 4, name: "Laptop Stand", price: 899 },
  { id: 5, name: "Bluetooth Speaker", price: 1499 },
  { id: 6, name: "Webcam", price: 799 },
  { id: 7, name: "Power Bank", price: 999 },
];

let cart = [];

/**
 * @route   POST /api/cart
 * @desc    Add product to cart
 */
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Find product in mock list
    const product = mockProducts.find((p) => p.id === Number(productId));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if product already in cart
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.push({ product, quantity: quantity || 1 });
    }

    const total = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    res.json({
      message: "Product added to cart",
      cart,
      total,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding to cart",
      error: error.message,
    });
  }
};

/**
 * @route   GET /api/cart
 * @desc    Get all cart items with total
 */
const getCart = async (req, res) => {
  try {
    const total = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    res.json({ items: cart, total });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching cart",
      error: error.message,
    });
  }
};

/**
 * @route   DELETE /api/cart/:id
 * @desc    Remove product from cart by id
 */
const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const index = cart.findIndex(
      (item) => item.product.id === Number(id)
    );

    if (index === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    cart.splice(index, 1);

    const total = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    res.json({
      message: "Item removed from cart",
      cart,
      total,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error removing item",
      error: error.message,
    });
  }
};

module.exports = { addToCart, getCart, removeFromCart };
module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  __getCartRef: () => cart,
};

