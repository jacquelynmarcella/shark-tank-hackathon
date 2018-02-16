require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var influencers = require("../influencers-list.js");

router.get('/', function(req, res, next) {
   console.log("influencer get all");

   res.json(influencers);
});


module.exports = router;
