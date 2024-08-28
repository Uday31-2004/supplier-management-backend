const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  status: { type: String, default: 'In Transit' },
  deliveryDate: { type: Date },
  trackingInfo: {
    carrier: String,
    trackingNumber: String,
  },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Delivery', deliverySchema);
