const express = require('express');
const router = express.Router();
const Client = require('../models/clients');
const Artist = require('../models/artists')

// ******************** INDEX ROUTE ******************** //
router.get('/', (req, res) => {
	Client.find({}, (err, foundClients) => {
		Client.findOne({username: req.session.username}, (err, foundClient) => {
		res.render('clients/index.ejs', {
			clients: foundClients,
			username: req.session.username,
			session: req.session.logged,
			client: foundClient
		});
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
		Client.findOne({username: req.session.username}, (err, foundClient) => {
		Artist.findById(req.params.id,
		(err, foundArtist) => {
		res.render('clients/show.ejs', {
			artist: foundArtist,
			client: foundClient,
			username: req.session.username,
			session: req.session.logged
			})
		})
	})
})
})
// ******************** EDIT ROUTE ******************** //
router.get('/:id/edit', (req, res) => {
	Client.findOne({username: req.session.username}, (err, foundClient) => {
	Client.findById(req.params.id, (err, editClient) => {
		res.render('clients/edit.ejs', {
			client: editClient,
			username: req.session.username,
			session: req.session.logged
		})
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