const express = require('express');

const router = express.Router();

const Artist = require('../models/artists');

const Client = require('../models/clients')
const mongooseUrl = require('mongoose-type-url');

// ******************** INDEX ROUTE ******************** //
router.get('/', (req, res) => {
	Artist.find({},
		(err, allArtists) => {
			Artist.findOne({username: req.session.username}, (err, foundArtist) => {
			Client.findOne({username: req.session.username}, (err, foundClient) => {
			// if(err){console.log('--------ERROR--------', err);}
			// else{
				// console.log('----------ALL ARTISTS--------');
				res.render('../views/artists/index.ejs',{
					artists: allArtists,
					username: req.session.username,
					session: req.session.logged,
					client: foundClient,
					artistId: foundArtist
				})
			})
		}
	)
})
})
// ******************** NEW ROUTE ******************** //

router.get('/new', (req, res) => {
	Artist.find({}, (err, newArtist) => {
		Artist.findOne({username: req.session.username}, (err, foundArtist) => {
		if(err){console.log('---------ERROR---------', err);}
		else{
			console.log('--------------NEW ARTIST--------------', newArtist);
				res.render('../views/artists/new.ejs', {
					artists:newArtist,
					username: req.session.username,
					session: req.session.logged,
					artistId: foundArtist
				})
		}
	})
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
			Artist.findOne({username: req.session.username}, (err, foundArtistId) => {
			Client.findOne({username: req.session.username}, (err, foundClient) => {
			if(err){console.log('----------ERROR---------', err);}
			else{
				console.log('---------------FOUND ARTIST----------', foundArtist);
				res.render('artists/show.ejs',{
					artist:foundArtist,
					username: req.session.username,
					session: req.session.logged,
					user: req.session,
					client: foundClient,
					artistId: foundArtistId
				})
			}
		})
})
})
})
// ******************** CREATE ROUTE ******************** //
router.post('/', (req, res) => {
	Client.findById(req.body.clientId, (err, foundClient) => {
		Artist.create(req.body,
			(err, createdArtist) => {
				// foundClient.favArtist.push(createdArtist)
				if(err){console.log('---------ERROR---------', err);}
				else{
					console.log('------------CREATED ARTIST----------', createdArtist);
					res.redirect('/artists');
				}
			}
		)
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
			Artist.findOne({username: req.session.username}, (err, foundArtist) => {
			Client.findOne({username: req.session.username}, (err, foundClient) => {
			if(err){console.log('--------ERROR--------', err);}
			else{
				console.log('--------------EDIT ARTIST', editArtist);
					res.render('../views/artists/edit.ejs',{
						artist:editArtist,
						username: req.session.username,
						session: req.session.logged,
						client: foundClient,
						artistId: foundArtist

					})
			}
	})
})
})
})
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
// ******************** UPDATE ROUTE ******************** //
router.put('/:id', (req, res) => {
	console.log('----------------------------------------req.body in artist put route:');
	console.log(req.body);
	console.log(req.session);
	Artist.findByIdAndUpdate(req.params.id, req.body,
	 	(err, updateArtist) => {
	// add artist to client favorites:
		// find artist (use url params id)
		Artist.findById(req.params.id, (err, foundArtist) => {
		// find client (use username in req.session)
			Client.findOne({username: req.session.username}, (err, foundClient) => {
		// push artist into client favs
				// foundClient.favArtist.push(foundArtist);
		// client.save
					foundClient.save((err, savedNewArtist) => {
						if(err){console.log('--------ERROR--------', err);}
						else {res.redirect('/clients/'+foundClient.id)}
					})
				
			});
				
		});
	})
})

	// Artist.findByIdAndUpdate(req.params.id, req.body,
	// 	(err, updateArtist) => {
	// 			if(err){console.log('--------------ERROR------------', err);}
	// 			else{
	// 				console.log('--------------UPDATE ARTIST------------', updateArtist);
	// 				    res.redirect('/artists')

	// 			}
	// 	})

module.exports = router;
