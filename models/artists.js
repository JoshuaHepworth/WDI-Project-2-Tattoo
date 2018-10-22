const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
	name: String,
	city: {type:String, required: true},
	yearsExp: Number,

	// work: [tats],
	// clients: [client],
	// appointments: [appointments]
	
	// tattoos: [tatoos],
	// appointments: [appointments]
})

module.exports = mongoose.model('Artist', artistSchema);