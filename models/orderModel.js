const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  items: [{ name: String, quantity: Number }],
  status: { type: String, default: 'Pending' },
  expectedDeliveryDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
