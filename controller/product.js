const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;
 const model = require('../model/product')
 const Product = model.Product;
 
 //Create
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
  
  exports.getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products);
  }
  exports.getProduct =async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id)
    res.json(product);
  }

  //PUT request (update the whole object)
  exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
      res.status(201).json(doc);
    }catch(err){
      console.log(err)
      res.status(400).json(err);
    }
    
    
  }

//PATCH method (update only one thing)
  exports.updateProduct=async (req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
      res.status(201).json(doc);
    }catch(err){
      console.log(err)
      res.status(400).json(err);
    }
  }
  

   exports.deleteProduct =async (req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndDelete({_id:id})
      res.status(201).json(doc);
    }catch(err){
      console.log(err)
      res.status(400).json(err);
    }
  }