const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
	name: String,
	favArtist: {type:String, required: true}
	// tats: [tattooSchema],
	//username: {type: String, required: true, unique: true}
	//username: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('Client', clientSchema);