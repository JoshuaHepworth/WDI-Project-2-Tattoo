const mongoose = require('mongoose');
// const Client = require('./clients');
const mongooseUrl = require('mongoose-type-url');

const artistSchema = new mongoose.Schema({
	name: String,
	city: String,
	yearsExp: Number,
	urls: [String],
	username: String,
	password: String
	// work: [tats],
	// clients: [client],
	// appointments: [appointments]
	
	// tattoos: [tatoos],
	// appointments: [appointments]
})

module.exports = mongoose.model('Artist', artistSchema);