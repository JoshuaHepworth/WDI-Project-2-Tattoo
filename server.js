const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const PORT = 3000;

require('./db/db');



/******** Middle Ware *********/
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


const artistController = require('./controllers/artistController');
const clientController = require('./controllers/clientController')
const authController = require('./controllers/authController')
/******** Controllers *********/
app.use(session({
	secret: 'This is a super secret String',
	resave: false,
	saveUninitialized: false
}));
app.use('/artists', artistController);
app.use('/clients', clientController)
app.use('/auth', authController)



/******** What shows up when you go to localhost:3000/ *********/
app.get('/', (req, res) => {
	res.render('index.ejs')
});

/******** Middle Ware *********/
app.listen(PORT, () => {
	console.log('server listening on port ' + PORT)	
});