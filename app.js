var express = require('express');
var mongoose = require('mongoose');


// Setup the database mongoose info
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DB");
});


// Setup the web express info
var app = express();


app.use(express.static('public'));

app.get('/notes', function (req, res) {
  response = [{
    body:'some text',
    date:Date.now()
  },
  {
    body:'more text',
    date:Date.now()
  }];
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
