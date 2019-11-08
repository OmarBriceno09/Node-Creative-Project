var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("waddup");
  res.sendFile('index.html', { root: 'public' });
});

var api="&key=cb0a8fd0-2afb-4e24-bcd6-867f72ab07c5";
var part_url = "?pretty&country=US&year=2018&search=";
router.get('/holiday', function(req, res, next) {
  console.log("Holiday time.");
  console.log(req.query['q'])
  var url = "https://holidayapi.com/v1/holidays"+part_url+req.query['q']+api;
  request(url).pipe(res);
  
});
module.exports = router;