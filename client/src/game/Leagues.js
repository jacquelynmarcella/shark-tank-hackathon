import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Leagues extends Component {
  render(){
    return(
     <div>
     	<h1>League: Celebrity</h1>
     	<div className="influencerOption" id={this.props.id}>
	        <div className="influencerImg">
	          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
	        </div>
	        <div className="influencerContent">
	          <h5>Name</h5>
	          <p>Stats</p>
	          <p>Stats</p>
	        </div>
      	</div>
     </div>

      );
  }
}

export default Leagues;

