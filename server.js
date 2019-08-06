'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

/*file upload*/
//const fileUpload = require('express-fileupload');
/*file upload*/
var app = express();

/*file upload*/
//app.use(fileUpload());
/*file upload*/
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));


app.get('/listUsers', function (req, res) {
  
      console.log( "INSIDE API" );
      res.end( "HELLLO............");
  
})

console.log("env "+process.env.DB_HOST);
const port = process.env.PORT || 1337;
var server = app.listen(3000, function () {
   var host = server.address().address
   //var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, 3000)
})