require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var influencers = require("../influencers-list.js");

router.post('/add', function(req, res, next) {
   console.log("add to user's selection");

   res.send(200);
});


module.exports = router;
