require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var influencers = require("../influencers-list.js");

router.post('/', function(req, res, next) {
   console.log("influencer get all");

   res.json(JSON.stringify(influencers));
});


module.exports = router;
