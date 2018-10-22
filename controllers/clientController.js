const express = require('express');
const router = express.Router();
const Client = require('../models/clients');
const Artist = require('../models/artists')

// ******************** INDEX ROUTE ******************** //
router.get('/', (req, res) => {
	Client.find({}, (err, foundClients) => {
		res.render('clients/index.ejs', {
			clients: foundClients
		});
	});
});
// ******************** NEW ROUTE ******************** //
router.get('/new', (req, res) => {
	res.render('clients/new.ejs');
	});
// ******************** SHOW ROUTE ******************** //
router.get('/:id', (req, res) => {
	Client.findById(req.params.id, (err, foundClient) => {
		res.render('clients/show.ejs', {
			client: foundClient
		})
	})
})
// ******************** EDIT ROUTE ******************** //
router.get('/:id/edit', (req, res) => {
	Client.findById(req.params.id, (err, editClient) => {
		res.render('clients/edit.ejs', {
			client: editClient
		})
	})
})
// ******************** CREATE ROUTE ****************** //
router.post('/', (req, res) => {
	Client.create(req.body, (err, createdClient) => {
		if(err){
			console.log(err)
		} else {
			res.redirect('/clients')
		}
	})
})
// ******************** UPDATE ROUTE ******************** 
router.put('/:id', (req, res) => {
	Client.findByIdAndUpdate(req.params.id, req.body, (err, updatedClient) => {
		res.redirect('/clients')
	})
})
// ******************** DESTROY ROUTE ******************** //
router.delete('/:id', (req, res) => {
	Client.findByIdAndDelete(req.params.id, () => {


		res.redirect('/clients')
	})
})



















module.exports = router;