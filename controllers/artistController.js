const express = require('express');

const router = express.Router();

const Artist = require('../models/artists');

// ******************** INDEX ROUTE ******************** //
router.get('/', (req, res) => {
	Artist.find({},
		(err, allArtists) => {
			if(err){console.log('--------ERROR--------', err);}
			else{
				console.log('----------ALL ARTISTS--------', allArtists);
				res.render('../views/artists/index.ejs',{
					artists:allArtists
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
					artists:newArtist
				})
		}
	})
})
// ******************** SHOW ROUTE ******************** //
router.get('/:id', (req, res) => {
	Artist.findById(req.params.id,
		(err, foundArtist) => {
			if(err){console.log('----------ERROR---------', err);}
			else{
				console.log('---------------FOUND ARTIST----------', foundArtist);
				res.render('artists/show.ejs',{
					artist:foundArtist
				})
			}
		})
})
// ******************** CREATE ROUTE ******************** //
router.post('/', (req, res) => {
	Artist.create(req.body,
		(err, createdArtist) => {
			if(err){console.log('---------ERROR---------', err);}
			else{
				console.log('------------CREATED ARTIST----------', createdArtist);
					res.redirect('/artists');
			}
	})
})
// ******************** DESTROY ROUTE ******************** //
router.delete('/:id', (req, res) => {
	Artist.findByIdAndDelete(req.params.id,
		(err, deleteRoom) => {
			if(err){console.log('--------ERROR-------');}
			else{
				console.log('--------------DELETED ARTISTS-----------');
					res.redirect('/artists');
			}
		})
})
// ******************** EDIT ROUTE ******************** //
router.get('/:id/edit', (req, res) => {
	Artist.findById(req.params.id, 
		(err, editArtist) => {
			if(err){console.log('--------ERROR--------', err);}
			else{
				console.log('--------------EDIT ARTIST', editArtist);
					res.render('../views/artists/edit.ejs',{
						artist:editArtist
					})
			}
	})
})
// ******************** UPDATE ROUTE ******************** //
router.put('/:id', (req, res) => {
	Artist.findByIdAndUpdate(req.params.id, req.body,
		(err, updateArtist) => {
				if(err){console.log('--------------ERROR------------', err);}
				else{
					console.log('--------------UPDATE ARTIST------------', updateArtist);
					    res.redirect('/artists')

				}
		})
})

module.exports = router;
