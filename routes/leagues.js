require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var influencers = require("../influencers-list.js");
var League = require('../models/league');

router.post('/add', function(req, res, next) {
   console.log("add to user's selection");
   console.log(req.body);
   res.send(req.body);

   var userInfo = [{
   		user: req.body.user,
   		influencers: req.body.data.selectedList
   }];

   League.create({
   	name: req.body.data.name,
   	easyId: req.body.data.inviteKey,
   	currentUser: userInfo,
   	startDate: req.body.startDate
   })

});


module.exports = router;
