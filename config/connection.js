// Declare - const or var/let 
// const test = 10;
// test = 5; Cannot
// let test02 = 10;
// test02 = 5;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;