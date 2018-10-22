const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const Artist = require('../models/artists');
const PORT = 3000;

require('./db/db');



/******** Middle Ware *********/
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/assets', express.static('assets'));


const artistController = require('./controllers/artistController');
const clientController = require('./controllers/clientController')
/******** Controllers *********/
app.use('/artists', artistController);
app.use('/clients', clientController)

// /********Populate Artists/****************/
// Artist.collection.insertMany(populateArtists,(err, data) => {
// 	res.send('artist collection')
// 	 console.log("added provided artist data")
//      mongoose.connection.close();
  
//    });



/******** What shows up when you go to localhost:3000/ *********/
app.get('/', (req, res) => {
	res.render('index.ejs')
});

/******** Middle Ware *********/
app.listen(PORT, () => {
	console.log('server listening on port ' + PORT)	
});