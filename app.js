const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
var path = require('path');
const fs = require('fs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

require('./mongo');


var data = fs.readFileSync('./reference.json')
var result = JSON.parse(data);

require('./routes/index')(app, request);

var Port = 3030; // server port number
app.listen(Port, ()=>{
  console.log('Server Porting on '+Port);
  console.log(result);
})
