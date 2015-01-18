var express = require('express');
var app = express();

// Require routes
var routes = require('./routes');
var userRoutes = require('./routes/user');

app.use('/', routes);

// Only requests that begin with /user will be handled by userRoutes.
app.use('/user', userRoutes);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
