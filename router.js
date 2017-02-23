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
  Items.find(req.parm.id, function(err, items){
    if(!err) res.send(items);
	else console.log ('ERROR: ' + err);
	});
};

//POST
addItems = function(req,res){
	console.log('POST');
	console.log(req.body);

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
	Items.findByID(req.parms.id, function(err,items){
		items.name= req.body.name,
	    items.cost= req.body.cost,
	    items.store= req.body.store,
	    items.description= req.body.description
	});

	items.save(function(err){
		if(!err) console.log('item updated');
		else console.log('ERROR: ' + err);
	});
};

//DELETE
deleteItem = function (req,res){
	Items.findByID(req.parms.id, function(err, items){
		items.remove(function(err){
			if(!err) console.log('item deleted');
			else console.log('ERROR: ' + err);
		})
	});
};

//API ROUTES
router.get('/items', findAllItems);
router.get('/items/:id', findByID);
router.post('/models/product', addItems);
router.put('/items/:id', updateItems);
router.delete('/items/:id', deleteItem);

module.exports= router;
