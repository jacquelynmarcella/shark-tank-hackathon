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

        <hr />

        <h4>Pending Leagues</h4>
        <div className="leagueList">
        	<div className="leagueListItem">
        		<h3>Celebrity</h3> 
        		<span className="players">1 player</span>
        		&nbsp; &nbsp; &nbsp; 
        		<span className="players">Invite Code: FL802</span>
        		<span className="timeLeft">Starts in 2 days</span>
        	</div>
        </div>

        <br /><br />

		<h4>Active Leagues</h4>
        <div className="leagueList">
        	<div className="leagueListItem">
        		<h3>Celebrity</h3> 
        		<span className="players">4 players</span>
        		<span className="timeLeft">1 day left</span>
        	</div>
        	<div className="leagueListItem">
        		<h3>Technology</h3> 
        		<span className="players">2 players</span>
        		<span className="timeLeft">3 days left</span>
        	</div>
        	<div className="leagueListItem">
        		<h3>Icons</h3> 
        		<span className="players">4 players</span>
        		<span className="timeLeft">4 days left</span>
        	</div>
        	<div className="leagueListItem">
        		<h3>Sports</h3> 
        		<span className="players">4 players</span>
        		<span className="timeLeft">7 days left</span>
        	</div>
        	<p className="finePrint">*All games last 5 days and end at 5pm PST</p>
        </div>
     </div>

      );
  }
}

export default Leagues;

