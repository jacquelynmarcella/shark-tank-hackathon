import React, { Component } from 'react';
import Signup from './auth/Signup.js';
import Flash from './layout/Flash.js';

class Home extends Component {
  render(){
    return (
        <div>
        	<header>
        		Header image here 
        	</header>
        	<h2>Signup</h2>
        	<Signup />
        </div>
      );
  }
}

export default Home;
