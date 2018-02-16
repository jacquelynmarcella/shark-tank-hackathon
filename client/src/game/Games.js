import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Games extends Component {
  render(){
    return(
     <div>
     	<h1>Games</h1>
     	<h3>Active</h3>
     	<h3>Upcoming</h3>
     	<h3>Completed</h3>
     </div>

      );
  }
}

export default Games;

