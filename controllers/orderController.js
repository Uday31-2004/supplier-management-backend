const Order = require('../models/orderModel');
const Supplier = require('../models/supplierModel');
exports.createOrder = async (req, res) => {
  try {
      const { name, quantity, addressFrom, addressTo } = req.body;

      if (!name || !quantity || !addressFrom || !addressTo) {
          return res.status(400).send({ error: 'All fields are required.' });
      }

      // Get a list of all suppliers
      const suppliers = await Supplier.find();
      if (!suppliers.length) {
          return res.status(500).send({ error: 'No suppliers available.' });
      }

      // Randomly select a supplier
      const randomSupplier = suppliers[Math.floor(Math.random() * suppliers.length)];

      // Create the order with the randomly selected supplier
      const order = new Order({
          supplierId: randomSupplier._id,
          items: { name, quantity },
          addressFrom,
          addressTo,
      });

      await order.save();
      res.status(201).send(order);
  } catch (error) {
      res.status(500).send({ error: 'Failed to create order.' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('supplier');
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
