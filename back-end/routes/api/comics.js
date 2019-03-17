var express = require('express');
var fs = require('fs');
var crypto = require('crypto');
var path = require('path');
var queryString = require('query-string');
var fetch = require("node-fetch");
var router = express.Router();
const dotenv = require('dotenv');

createHash = (ts) => {
  var content =
    ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY;
  var hash = crypto.createHash('md5').update(content).digest('hex');

  return hash;
}

router.get('/', function (req, res) {
dotenv.config();
let ts = new Date().getTime()
let qs = queryString.stringify({
  apikey: process.env.MARVEL_PUBLIC_KEY,
  ts: ts,
  hash: createHash(ts),
  limit: 100,
})
let url = 'https://gateway.marvel.com/v1/public/comics?'+ qs
let status; 
  let data;
    fetch(url)
      .then((res) => { 
        status = res.status; 
        return res.json() 
      })
    .then((jsonData) => {
      res.json(jsonData.data.results);
    })
    .catch((err) => {
      // handle error for example
      console.error(err);
  })
});


module.exports = router;
