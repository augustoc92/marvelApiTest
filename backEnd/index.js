var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');

var app = express();
var port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/api', api);

app.listen(port, function () {
  console.log('API REST on localhost:'+ port);
});
