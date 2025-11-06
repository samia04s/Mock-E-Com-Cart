const getProducts = (req, res) => {
  const products = [
    { id: 1, name: 'Wireless Mouse', price: 599 },
    { id: 2, name: 'Gaming Keyboard', price: 1299 },
    { id: 3, name: 'USB-C Cable', price: 199 },
    { id: 4, name: 'Laptop Stand', price: 899 },
    { id: 5, name: 'Bluetooth Speaker', price: 1499 },
    { id: 6, name: 'Webcam', price: 799 },
    { id: 7, name: 'Power Bank', price: 999 },
    { id: 8, name: 'Pen Drive', price: 499 },
    { id: 9, name: 'HDMI Cable', price: 299 },
    { id: 10, name: 'LED Lamp', price: 699 },
  ];
  res.json(products);
};

module.exports = { getProducts };
