let router = require('express').Router();
const Product = require('./app/models/product');

//GET ALL
findAllItems = function(req, res) {
  Items.find(function(err, items) {
    if (!err) {
      res.send(items)
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
};

//GET
findByID = function(req, res) {
  Items.findById(req.params._id, function(err, items) {
    if (!err) {
      res.send(items)
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
};

//POST
addItems = function(req, res) {
  let items = new Items({
    name: req.body.name,
findAllProduct = function (req, res){
  Product.find(function(err, product){
    if(!err) res.send(product);
	else console.log ('ERROR: ' + err);
	});
};

//GET
findByID = function (req, res){
  Product.findById(req.params._id, function(err, product){
    if(!err) res.send(product);
	else console.log ('ERROR: ' + err);
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
  items.save(function(err) {
    if (!err) {
      console.log('Item saved');
      res.send("OK")
    } else {
      res.status(404).end();
      console.log('ERROR: ' + err);
    }
  });
  res.send(items);
	product.save(function(err){
	  if(!err)console.log('Product saved');
	  else console.log('ERROR: ' + err)
	});
	res.send(product);
};

//PUT (update)
updateItems = function(req, res) {
  Items.findById(req.body._id, function(err, items) {
    items.name = req.body.name,
    items.cost = req.body.cost,
    items.store = req.body.store,
    items.description = req.body.description

    items.save(function(err) {
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
deleteItem = function(req, res) {
  Items.findByID(req.body._id, function(err, items) {
    items.remove(function(err) {
      if (!err) console.log('item deleted');
      else console.log('ERROR: ' + err);
    })
updateProduct = function(req,res){
  Product.findById(req.body._id, function(err,product){
    product.name= req.body.name,
	product.cost= req.body.cost,
	product.store= req.body.store,
	product.description= req.body.description

	product.save(function(err){
	  if(!err) console.log('Product updated');
	  else console.log('ERROR: ' + err);
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
