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
	Client.findOneAndDelete(req.params.id, () => {
		res.redirect('/clients')
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
		}
	)
})


















module.exports = router;