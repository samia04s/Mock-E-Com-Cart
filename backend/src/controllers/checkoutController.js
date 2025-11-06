let sharedCart = [];

exports.setCartReference = (cartRef) => {
  sharedCart = cartRef;
};

/**
 * @route   POST /api/checkout
 * @desc    Mock checkout process and clear the cart
 */
exports.checkout = async (req, res) => {
  try {
    if (!sharedCart || sharedCart.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Calculate total
    const total = sharedCart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    // Create mock order
    const order = {
      id: Date.now(),
      items: [...sharedCart],
      total,
      date: new Date().toLocaleString(),
      status: "Paid (Mock Transaction)",
    };

    // Clear the cart
    sharedCart.splice(0, sharedCart.length);

    res.status(200).json({
      message: "Checkout successful",
      order,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({
      message: "Checkout failed",
      error: error.message,
    });
  }
};
