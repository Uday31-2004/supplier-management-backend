const express = require('express');
const deliveryController = require('../controllers/deliveryController');
const router = express.Router();

router.get('/:orderId', deliveryController.trackDelivery);
router.patch('/:orderId', deliveryController.updateDeliveryStatus);

module.exports = router;
