var mongoose = require('mongoose'),
		userModel = require('../models/User');

module.exports = function(config) {
	//mongo ds021299.mlab.com:21299/multivision -u webmaster -p multivision
	//mongodb://webmaster:multivision@ds021299.mlab.com:21299/multivision

	mongoose.connect(config.db);	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback () {
		console.log('multivision db opened');
	});

	userModel.createDefaultUsers();
};