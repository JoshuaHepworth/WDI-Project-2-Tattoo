const mongoose = require('mongoose')
const Artist = require('./artists')

const clientSchema = new mongoose.Schema({
	name: String,
	favArtist: [Artist.schema]
	// tats: [tattooSchema],
	//username: {type: String, required: true, unique: true}
	//username: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('Client', clientSchema);