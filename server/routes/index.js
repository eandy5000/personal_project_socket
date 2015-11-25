var express = require('express');
var router = express.Router();
var path = require('path');




router.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

//io.on('connection', function(socket){
//  console.log('user connected');
//});

module.exports = router;