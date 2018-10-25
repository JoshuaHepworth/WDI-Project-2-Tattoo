const express = require('express');

const router = express.Router();

const Artist = require('../models/artists');

const Client = require('../models/clients')
const mongooseUrl = require('mongoose-type-url');

// ******************** INDEX ROUTE ******************** //
router.get('/', (req, res) => {
	Artist.find({},
		(err, allArtists) => {
				let uniqueCity = []
				let $uniqueCityTwo = uniqueCity
				let artistCities = [];
				let result = uniqueCity.filter(city => uniqueCity === allArtists);
				for (let i = 0; i < allArtists.length; i++) {
					 artistCities.push(allArtists[i].city)
				};
				
				for (let i = 0; i < artistCities.length; i++){
					if(uniqueCity.length === 0) {
						uniqueCity.push(artistCities[i])
					} else {
						for (let j = 0; j < uniqueCity.length; j++) {
							//if uniqueCity j euqals artistCities i then dont do ANYTHING
							//if its NOT equal then push
							if(uniqueCity.findIndex((city) => {
								return city === artistCities[i] 
							}) === -1){
								uniqueCity.push(artistCities[i]);
							}
						}
					}
				}
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
					artistId: foundArtist,
					cities: uniqueCity,
					cityResult  : result
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
            urls: ['https://images.pexels.com/photos/807688/pexels-photo-807688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Brian Esparza',
            city: 'Chicago',
            yearsExp: 6,
            urls: ['https://images.pexels.com/photos/951001/pexels-photo-951001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Luke Xan',
            city: 'Denver',
            yearsExp: 15,
            urls: ['https://images.pexels.com/photos/428105/pexels-photo-428105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Bill Nye the Tatto Guy',
            city: 'Austin',
            yearsExp: 30,
            urls: ['https://images.pexels.com/photos/38870/pexels-photo-38870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Joe CRUD',
            city: 'Dallas',
            yearsExp: 12,
            urls: ['https://images.pexels.com/photos/163688/hiker-travel-trip-wander-163688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Bob Lee Swagger',
            city: 'Austin',
            yearsExp: 4,
            urls: ['https://images.pexels.com/photos/1338730/pexels-photo-1338730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Katrina Zey',
            city: 'Denver',
            yearsExp: 17,
            urls: ['https://images.pexels.com/photos/1327214/pexels-photo-1327214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Zoey Foyd',
            city: 'Chicago',
            yearsExp: 8,
            urls: ['https://images.pexels.com/photos/277320/pexels-photo-277320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Jill Stein',
            city: 'Austin',
            yearsExp: 24,
            urls: ['https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Bo Burnham',
            city: 'Denver',
            yearsExp: 13,
            urls: ['https://images.pexels.com/photos/248387/pexels-photo-248387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Sal Rosenberg',
            city: 'Chicago',
            yearsExp: 4,
            urls: ['https://images.pexels.com/photos/428320/pexels-photo-428320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Morgan Freeman',
            city: 'Chicago',
            yearsExp: 40,
            urls: ['https://images.pexels.com/photos/1913/iceland-person-arm-art.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Angel Swanson',
            city: 'San Francisco',
            yearsExp: 27,
            urls: ['https://images.pexels.com/photos/325152/pexels-photo-325152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Filip Tatarnik',
            city: 'Chicago',
            yearsExp: 0,
            urls: ['https://images.pexels.com/photos/48805/tattoo-foot-skin-black-and-white-48805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350']
            // work: [tats],
            // clients: [client],
            // appointments: [appointments]
            
            // tattoos: [tatoos],
            // appointments: [appointments]
          },{
            name: 'Josh Hepworth',
            city: 'Chicago',
            yearsExp: 0,
            urls: 'https://images.pexels.com/photos/1249214/pexels-photo-1249214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
});


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
	});
});

// ******************** SHOW ROUTE EMAIL ******************** //
router.get('/:id/email', (req, res) => {
    Artist.findById(req.params.id,
        (err, foundArtist) => {
            Client.findOne({username: req.session.username}, (err, foundClient) => {
                Artist.findOne({username: req.session.username}, (err, foundArtistId) => {
		            if(err){console.log('----------ERROR---------', err);}
			            else{
			                console.log('---------------FOUND ARTIST----------', foundArtist);
			                res.render('artists/email.ejs',{
			                    artist:foundArtist,
			                    username: req.session.username,
			                    session: req.session.logged,
			                    user: req.body.userType,
			                    client: foundClient,
			                    artistId: foundArtistId
                    })
                }
            })
        });
    });

});
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
});


router.put('/:id/newTat',(req, res) => {
	Artist.findById(req.params.id, (err, foundArtist) => {
		foundArtist.urls.push(req.body.urls);
		foundArtist.save((err, addedPhoto) => {
			if(err){
				console.log('------ERROR------', err);
			}
			else{
				console.log('----------------------ADDED PHOTO---------------', addedPhoto);
				res.redirect('/artists/' + foundArtist.id)
			}
		})
	})
})

// router.post('/:id/newTat', (req, res) => {
// 	Artist.findById(req.params.id,
// 		(err, foundArtist) => {

// 			console.log("MMMMMMMMMMMMMNDJQNIUW	UCWN	UNWUEN	UQWNUQND@UENC#RUNFMOEIDUBU")
// 			// you need req.body
// 			//push the URL into req.body of the artist ID
// 			//

// 			// Artist.findOne({username: req.session.username}, (err, foundArtist) => {
// 					Artist.urls.push(req.body, (err, addPhoto) => {
// 							if(err){console.log('-----------------ERROR-----------', err);}
// 							else{
// 								console.log('----------------ADDED PHOTO-----------------', addPhoto);
// 								Artist.save();
// 								res.redirect('artists/:id/show.ejs',{
// 									artist: foundArtist,
// 									urls: addPhoto
// 								})
// 							}
// 					})
// 			})	
// });


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
});
// ******************** EDIT ROUTE ******************** //
router.get('/:id/edit', (req, res) => {
	Artist.findById(req.params.id, 
		(err, editArtist) => {
			Artist.findOne({username: req.session.username}, (err, foundArtist) => {
				Client.findOne({username: req.session.username}, (err, foundClient) => {
					if(err){console.log('--------ERROR--------', err);}
						else{
							console.log('--------------EDIT ARTIST', editArtist);
								res.render('artists/edit.ejs',{
									artist:editArtist,
									username: req.session.username,
									session: req.session.logged,
									client: foundClient,
									artistId: foundArtist

					})
				}
			})
		})
	});
});

router.put('/:id', (req, res) => {
	Artist.findByIdAndUpdate(req.params.id, req.body,
		(err, updateArtist) => {
				if(err){console.log('--------------ERROR------------', err);}
				else{
					console.log('--------------UPDATE ARTIST------------', updateArtist);
				    res.redirect('/artists')

				}
		});
	
});


/// post route for adding photos to artist
// .post /artists/:artistId/newtat
// find artist
// push in tat url to their array
// artist.save
// redirect to wherever (show page?)

// ******************** EDIT ADD NEW PHOTO ROUTE ******************** //
router.get('/:id/newtat', (req, res) => {
	Artist.findById(req.params.id, 
		(err, editArtist) => {
			Artist.findOne({username: req.session.username}, (err, foundArtist) => {
				Client.findOne({username: req.session.username}, (err, foundClient) => {
					if(err){console.log('--------ERROR--------', err);}
						else{
							console.log('--------------EDIT ARTIST', editArtist);
								res.render('artists/newTat.ejs',{
									artist:editArtist,
									username: req.session.username,
									session: req.session.logged,
									client: foundClient,
									artistId: foundArtist

					})
				}
			})
		})
	});
});


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
});

	// Artist.findByIdAndUpdate(req.params.id, req.body,
	// 	(err, updateArtist) => {
	// 			if(err){console.log('--------------ERROR------------', err);}
	// 			else{
	// 				console.log('--------------UPDATE ARTIST------------', updateArtist);
	// 				    res.redirect('/artists')

	// 			}
	// 	})

module.exports = router;