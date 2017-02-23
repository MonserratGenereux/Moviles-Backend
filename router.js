let router = require('express').Router();
const Items = require('./app/models/product');

//GET ALL
findAllItems = function (req, res){
  Items.find(function(err, items){
	    if(!err) res.send(items);
	else console.log ('ERROR: ' + err);
	});
};

//GET
findByID = function (req, res){
  Items.findById(req.params._id, function(err, items){
    if(!err) res.send(items);
	else console.log ('ERROR: ' + err);
	});
};

//POST
addItems = function(req,res){
	var items = new Items({
		name: req.body.name,
	    cost: req.body.cost,
	    store: req.body.store,
	    description: req.body.description
	});
	items.save(function(err){
		if(!err)console.log('Item saved');
		else console.log('ERROR: ' + err)
	});
	res.send(items);
};

//PUT (update)

updateItems = function(req,res){
	Items.findById(req.body._id, function(err,items){
		items.name= req.body.name,
	    items.cost= req.body.cost,
	    items.store= req.body.store,
	    items.description= req.body.description

	    items.save(function(err){
			if(!err) console.log('item updated');
			else console.log('ERROR: ' + err);
		});
	});

	
};

//DELETE
deleteItem = function (req,res){
	Items.findByID(req.body._id, function(err, items){
		items.remove(function(err){
			if(!err) console.log('item deleted');
			else console.log('ERROR: ' + err);
		})
	});
};

//API ROUTES
router.get('/models/product', findAllItems);
router.get('/models/product/:_id', findByID);
router.post('/models/product', addItems);
router.put('/models/product', updateItems);
router.delete('/models/product', deleteItem);

module.exports= router;
