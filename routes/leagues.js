require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var influencers = require("../influencers-list.js");
var League = require('../models/league');

router.post('/add', function(req, res, next) {
   console.log("add to user's selection");
   //console.log(req.body.data);
   res.send(req.body);

   var infList = [];
   var infIds = [];
   //console.log(influencers);
   for(let i=0; i<req.body.data.selectedList.length; i++) {
      for( inf in influencers) {
         inf= ""+inf;
         if(influencers[inf].name===req.body.data.selectedList[i]) {
            //let id = ""+req.body.data.selectedList[i];
            infList.push(influencers[inf]);
            infIds.push(inf);
         }
      }
   }

   console.log(infIds);


   var userInfo = {
   		user: req.body.user,
   		influencer: infIds
   };

   var allUsers = [];
   allUsers.push(userInfo);

   // find league, if exists update, otherwise create
   League.findOne({easyId: req.body.data.inviteKey}, function(err, league) {
         if(!league) {
            //NOT found
            League.create({
               name: req.body.data.name,
               easyId: req.body.data.inviteKey,
               startDate: req.body.startDate,
               endDate: 0,
               user: allUsers,
               influencer: infList

            }, function(err, league) {
               //success
            })
         } else if(league){
            if (!league.user) league.user = [];
            if (!league.influencer) league.influencer = [];

            league.user.push({user: req.body.user, influencer: infIds});
            for(let i=0; i<infList.length; i++) {
               league.influencer.push(infList[i]);
            }
            league.save()
         }
   });



});


module.exports = router;
