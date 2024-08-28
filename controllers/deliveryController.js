const Delivery = require('../models/deliveryModel');

exports.trackDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findOne({ order: req.params.orderId });
    res.status(200).json(delivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDeliveryStatus = async (req, res) => {
  try {
    const delivery = await Delivery.findOneAndUpdate(
      { order: req.params.orderId },
      { status: req.body.status, updatedAt: Date.now() },
      { new: true }
    );
    res.status(200).json(delivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
