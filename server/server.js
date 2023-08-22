var express = require('express');
var app = express();
var http = require('http').Server(app);

//Requires path for routes
const path = require('path');

// Cross origin resourse sharing to cater for port 4200 to port 3000
var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// app.get('/', function(req, res){
//   res.sendFile(__dirname + '../Week4');
// });
// console.log(__dirname)

var http = require('http').Server(app);
let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
});



require('./router/api-login')(app,path);
