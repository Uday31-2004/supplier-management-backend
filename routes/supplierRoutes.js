const express = require('express');
const supplierController = require('../controllers/supplierController');
const router = express.Router();

router.post('/', supplierController.createSupplier);
router.get('/', supplierController.getSuppliers);
router.get('/:id', supplierController.getSupplierById);
module.exports = router;
