const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//Header Config
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Configuring the database with Mongo! 
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Good practice?? Probably not

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true // stop the stupid error!
    
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});













//https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
// define a simple route
app.get('/', (req, res) => {
    res.send("Welcome to Job Search Tracker");
});

//Require Jobs api routes 
require('./app/routes/jobs.routes')(app);

// listen for requests
app.listen(3000, () => {
    
    console.log("Server is listening on port 3000");

});
