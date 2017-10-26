const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Contact = require('./models/contact');

mongoose.Promise = Promise;

// mongoose.connect('mongodb://localhost/profiledb');
mongoose.connect('mongodb://thompsonjonm:1Qaz2WsX@ds235785.mlab.com:35785/heroku_cxjq2xrj')
const db = mongoose.connection;

db.on('error', function(error) {
  console.log('Mongoose error: ' + error);
});

db.once('open', function() {
  console.log('DB connect successful.');
});

const appRouter = require('./routes/appRouter');

const PORT = process.env.PORT || 3001;

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/contacts', appRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); 

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
