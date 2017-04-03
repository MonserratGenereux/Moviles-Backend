let router = require('express').Router();
const Product = require('./app/models/product');

//GET ALL
findAllProduct = function(req, res) {
  Product.find(function(err, product) {
    if (!err) {
      res.send({"products": product})
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
};

//GET
findByID = function(req, res) {
  Product.findById(req.params._id, function(err, product) {
    if (!err) {
      res.send(product)
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
};

//POST
addProduct = function(req,res){
  var product = new Product(req.body);
  product.save(function(err) {
    if (!err) {
      console.log('Product saved');
      res.send("OK")
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
};

//PUT (update)
updateProduct = function(req, res) {
  Product.findOneAndUpdate({_id: req.body._id},{ $set: req.body}, {upsert: true})
  .then(() => {
    console.log('Product updated');
    res.send("OK")
  })
  .catch((err) => {
    res.status(404).end();
    console.log('ERROR: ' + err);
  })
};

//DELETE
deleteProduct = function (req,res){
  Product.findByID(req.body._id, function(err, product){
    product.remove(function(err){
	  if(!err) console.log('Product deleted');
	  else console.log('ERROR: ' + err);
	})
  });
};

//GET CATEGORIEs db.getCollection('products').find({categories: "Anillo"})
findByCategory = function(req, res){
  Product.find({categories: req.params._category}, function(err, product){
    if(!err){
      res.send(product)
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
};

//GET ALL
findAllCategory = function(req, res) {
  Product.find(function(err, product) {
    if (!err) {
      res.send({"categories": product})
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
};

//API ROUTES
router.get('/product', findAllProduct);
router.get('/product/:_id', findByID);
router.get('/category/:_category', findByCategory);
router.get('/category/', findAllCategory);
router.post('/product', addProduct);
router.put('/product', updateProduct);
router.delete('/product', deleteProduct);


//find({categories: "Anillo"})
module.exports = router;
