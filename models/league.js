var mongoose = require('mongoose');

var leagueScheme = new mongoose.Schema ({
   name: {
      type: String
   },
   easyId: {
      type: String
   },
   startDate: {
      type: Number
   },
   endDate: {
      type: Number
   },
   user: [{
      id: {
         type: String
      },
      influencer: {
         type: String
      }
   }],
   influencer: [{
      name: {
         type: String
      },
      imageUrl: {
         type: String
      },
      id: {
         type: String
      }
   }
   ]
});


var League = mongoose.model('League', leagueScheme);

module.exports = League;

