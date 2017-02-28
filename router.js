let router = require('express').Router();
const Product = require('./app/models/product');

//GET ALL
findAllProduct = function(req, res) {
  Product.find(function(err, items) {
    if (!err) {
      res.send(product)
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
  var product = new Product({
	name: req.body.name,
    cost: req.body.cost,
    store: req.body.store,
    description: req.body.description
  });
  product.save(function(err) {
    if (!err) {
      console.log('Item saved');
      res.send("OK")
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
  res.send(product);
	product.save(function(err){
	  if(!err)console.log('Product saved');
	  else console.log('ERROR: ' + err)
	});
	res.send(product);
};

//PUT (update)
updateItems = function(req, res) {
  Product.findById(req.body._id, function(err, product) {
    product.name = req.body.name,
    product.cost = req.body.cost,
    product.store = req.body.store,
    product.description = req.body.description

    product.save(function(err) {
      if (!err) {
        console.log('Item updated');
        res.send("OK")
      } else {
        res.status(404).end();
        console.log('ERROR: ' + err);
      }
    });
  });
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

//API ROUTES
router.get('/models/product', findAllProduct);
router.get('/models/product/:_id', findByID);
router.post('/models/product', addProduct);
router.put('/models/product', updateProduct);
router.delete('/models/product', deleteProduct);

module.exports = router;
