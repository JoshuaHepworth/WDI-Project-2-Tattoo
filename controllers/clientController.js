const express = require('express');
const router = express.Router();
const Client = require('../models/clients');
const Artist = require('../models/artists')

router.get('/', (req, res) => {
	Client.find({}, (err, foundClients) => {
		res.render('/clients/index.ejs', {
			clients: foundClients
		});
	});
});













// ******************** INDEX ROUTE ******************** //

// ******************** NEW ROUTE ******************** //

// ******************** CREATE ROUTE ******************** //

// ******************** SHOW ROUTE ******************** //

// ******************** DESTROY ROUTE ******************** //

// ******************** EDIT ROUTE ******************** //

// ******************** UPDATE ROUTE ******************** 




module.exports = router;