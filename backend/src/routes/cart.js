const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

// routes
router.post("/", addToCart);         // POST /api/cart
router.get("/", getCart);            // GET /api/cart
router.delete("/:id", removeFromCart); // DELETE /api/cart/:id

module.exports = router;
