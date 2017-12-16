var express = require('express');
var app = express();
var middleware = require('./middleware.js')
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
  res.send("About us!");
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
