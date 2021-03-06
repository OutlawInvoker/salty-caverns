var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/multivision',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://webmaster:multivision@ds021299.mlab.com:21299/multivision',
		port: process.env.PORT || 80
	}
}