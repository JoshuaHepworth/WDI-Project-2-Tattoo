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
	res.render('clients/new.ejs')
})















// ******************** CREATE ROUTE ******************** //

// ******************** SHOW ROUTE ******************** //

// ******************** DESTROY ROUTE ******************** //

// ******************** EDIT ROUTE ******************** //

// ******************** UPDATE ROUTE ******************** 




module.exports = router;