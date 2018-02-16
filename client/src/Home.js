import React, { Component } from 'react';
import Signup from './auth/Signup.js';
import Flash from './layout/Flash.js';

class Home extends Component {
  render(){
    return (
        <div>
        	<header>
          <div className="headerText">
        		<h1>Who will win the game of relevance?</h1>
            <h3>Draft your team of influencers and battle head-to-head against your friends</h3>
            <h3>May the most influential win!</h3>
          </div>
        	</header>
        	<h2>Signup</h2>
        	<Signup />
        </div>
      );
  }
}

export default Home;
