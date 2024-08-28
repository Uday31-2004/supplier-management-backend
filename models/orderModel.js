// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
    },
    items: {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
    },
    addressFrom: {
        type: String,
        required: true,
    },
    addressTo: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
