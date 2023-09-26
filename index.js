const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/products')

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/products',productRouter.router)


// API - Endpoint - Route

// Products
// API ROOT , base URL, example - google.com/api/v2/




server.listen(8080, () => {
  console.log('server started');
});