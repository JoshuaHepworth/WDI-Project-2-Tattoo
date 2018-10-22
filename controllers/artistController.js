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


router.get('/seed', (req, res) => {
	Artist.create(
		[
		  {
		    name: 'Bo Jackson',
		    city: 'Chicago',
		    yearsExp: 20,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Brian Esparza',
		    city: 'Chicago',
		    yearsExp: 6,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Luke Xan',
		    city: 'Denver',
		    yearsExp: 15,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Bill Nye the Tatto Guy',
		    city: 'Austin',
		    yearsExp: 30,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Joe CRUD',
		    city: 'Dallas',
		    yearsExp: 12,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Bob Lee Swagger',
		    city: 'Austin',
		    yearsExp: 4,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Katrina Zey',
		    city: 'Denver',
		    yearsExp: 17,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Zoey Foyd',
		    city: 'Chicago',
		    yearsExp: 8,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Jill Stein',
		    city: 'Austin',
		    yearsExp: 24,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Bo Burnham',
		    city: 'Denver',
		    yearsExp: 13,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Sal Rosenberg',
		    city: 'Chicago',
		    yearsExp: 4,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Morgan Freeman',
		    city: 'Chicago',
		    yearsExp: 40,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Angel Swanson',
		    city: 'San Francisco',
		    yearsExp: 27,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Filip Tatarnik',
		    city: 'Chicago',
		    yearsExp: 0,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  },{
		    name: 'Josh Hepworth',
		    city: 'Chicago',
		    yearsExp: 0,
		    // work: [tats],
		    // clients: [client],
		    // appointments: [appointments]
		    
		    // tattoos: [tatoos],
		    // appointments: [appointments]
		  }
		],
		(err, createdArtists) => {
			console.log(createdArtists)
			res.send(createdArtists)
		}
	)
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
