import React, { Component } from 'react';
import Signup from './auth/Signup.js';
import Flash from './layout/Flash.js';

class Home extends Component {
  render(){
    return (
        <div>
        	<header>
        		<h1>Welcome text</h1>
            <h3>Selling point!</h3>
        	</header>
        	<h2>Signup</h2>
        	<Signup />
        </div>
      );
  }
}

export default Home;
