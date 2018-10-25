const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/tattooApp4';

const mongoDBUrl = process.env.MONGODB_URI || 'mongodb://localhost/tattooApp4'

mongoose.connect(mongoDBUrl, { useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected at ', connectionString);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected ');
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose error ', err);
});
