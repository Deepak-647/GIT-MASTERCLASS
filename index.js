const express = require('express');
const morgan = require('morgan');
const server = express();
const productController = require('./controller/product')

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));



// API - Endpoint - Route

// Products
// API ROOT , base URL, example - google.com/api/v2/

//Create POST /products     C R U D
server.post('/products', productController.createProduct);
server.get('/products',productController.getProducts );
// Read GET /products/:id
server.get('/products/:id', productController.getProduct);
// Update PUT /products/:id
server.put('/products/:id', productController.replaceProduct);
// Update PATCH /products/:id
server.patch('/products/:id', productController.updateProduct);
// Delete DELETE /products/:id
server.delete('/products/:id', productController.deleteProduct);


server.listen(8080, () => {
  console.log('server started');
});