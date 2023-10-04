const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;
 const model = require('../model/product')
 const Product = model.Product;
 
 
 exports.createProduct = async (req, res) => {
  try {
      const product = new Product(req.body);
       

      // Save the product and await the promise
      const savedProduct = await product.save();

      console.log({ savedProduct }); // Log the saved product

      res.status(201).json(savedProduct);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error saving the product' });
  }
}
  
  exports.getProducts = (req, res) => {
    res.json(products);
  }
  exports.getProduct =(req, res) => {
    const id = +req.params.id;
    const product = products.find(p=>p.id===id)
    res.json(product);
  }
  exports.replaceProduct =(req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();
  }
  exports.updateProduct=(req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
  }
   exports.deleteProduct =(req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
  }