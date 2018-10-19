const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const PORT = 3000;

require('./db/db')

app.get('/', (req, res) => {
	res.send('testing')
})




app.listen(PORT, () => {
	console.log('server listening on port ' + PORT)	
})