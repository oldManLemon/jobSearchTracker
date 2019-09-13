const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


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














// define a simple route
app.get('/', (req, res) => {
    res.send("Welcome to Job Search Tracker");
});

// listen for requests
app.listen(3000, () => {
    
    console.log("Server is listening on port 3000");

});
