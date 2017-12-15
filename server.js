var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js')
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
  res.send("About us!");
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function (){
  console.log("express server started on port: " + PORT);
})