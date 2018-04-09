// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Instance of Express
var app = express();
// var PORT = process.env.PORT || 4000; // Sets an initial port. We'll use this later in our listener
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
// Run Morgan for Logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));
app.use(express.static('./node_modules'));

// -------------------------------------------------

// // MongoDB Configuration configuration (Change this URL to your own DB)
// if (!process.env.NODE_ENV) {
//     mongoose.connect('mongodb://localhost:27017/ariGonzo');
// } else {
// 	mongoose.connect('mongodb://heroku_w7m695c4:rjq0qm60jc9ctrt2latg5sajpe@ds121696.mlab.com:21696/heroku_w7m695c4')
// }
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;

// db.on('error', function (err) {
//   console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
//   console.log('Mongoose connection successful.');
// });

// Routes
// require('./routes/apiRoutes.js')(app); 
require('./routes/htmlRoutes.js')(app);

app.listen(server_port, server_ip_address, function(){
	console.log('Listening on', server_port);
});