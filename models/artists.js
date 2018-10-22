const mongoose = require('mongoose');
// const Client = require('./clients');

const artistSchema = new mongoose.Schema({
	name: String,
	city: String,
	yearsExp: Number

	// work: [tats],
	// clients: [client],
	// appointments: [appointments]
	
	// tattoos: [tatoos],
	// appointments: [appointments]
})

module.exports = mongoose.model('Artist', artistSchema);