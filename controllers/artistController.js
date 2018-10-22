const express = require('express');

const router = express.Router();

const Artist = require('../models/artists');

// ******************** INDEX ROUTE ******************** //
router.get('/', (req, res) => {
	Artist.find({},
		(err, foundArtists) => {
			if(err){console.log('--------ERROR--------', err);}
			else{
				console.log('----------FOUND ARTISTS--------', foundArtists);
				res.render('../views/artists/index.ejs',{
					artist:foundArtists
				})
			}
		}
	)
})
// ******************** NEW ROUTE ******************** //
router.get('/new', (req, res) => {
	Artist.find({}, (err, newArtist) => {
		if(err){console.log('---------ERROR---------', err);}
		else{
			console.log('--------------NEW ARTIST--------------', newArtist);
				res.render('../views/artists/new.ejs', {
					artist:newArtist
				})
		}
	})
})
// ******************** CREATE ROUTE ******************** //

// ******************** SHOW ROUTE ******************** //

// ******************** DESTROY ROUTE ******************** //

// ******************** EDIT ROUTE ******************** //

// ******************** UPDATE ROUTE ******************** //


module.exports = router;
