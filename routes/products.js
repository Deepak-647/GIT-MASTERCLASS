const express = require('express');
const productController = require('../controller/product');
const router = express.Router();

// C R U D
router
.post('/', productController.createProduct)
.get('/',productController.getProducts )
.get('/:id', productController.getProduct)
.put('/:id', productController.replaceProduct)
.patch('/:id', productController.updateProduct)
.delete('/:id', productController.deleteProduct)
 
exports.router =router;