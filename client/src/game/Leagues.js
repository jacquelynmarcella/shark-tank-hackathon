import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Leagues extends Component {
  render(){
    return(
     <div>
     	<div className="joinLeage">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter 5 digit code
              <input name="name" placeholder="12345" type="text" />
            </label>
            </form>
          	<input type="button" value="Join League" disabled />
        </div> 
        <div className="leagueList">
        	<h5>Celebrity <span className="players">4 players</span> <span className="timeLeft">1 day left</span></h5>
        	<h5>Celebrity <span className="players">4 players</span> <span className="timeLeft">2 days left</span></h5>
        	<h5>Celebrity <span className="players">4 players</span> <span className="timeLeft">4 days left</span></h5>
        	<p className="finePrint">*All games last 5 days and end at 5pm PST</p>
        </div>
     </div>

      );
  }
}

export default Leagues;

