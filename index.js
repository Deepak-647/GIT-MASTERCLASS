const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const server = express();
const productRouter = require('./routes/products')

//database connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecom');
  console.log('connected to database')
}


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