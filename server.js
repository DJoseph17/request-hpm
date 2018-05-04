// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var os = require('os');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var api = 'api/whoami';
//retrieve client ip address
app.get(api, (req,res,next) =>{
var ipaddress = req.ip;
var language= req.acceptsLanguages();
var software = req.navigatoruserAgent;
  
res.json({ipaddress:ipaddress, language: language[0],os:os});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
