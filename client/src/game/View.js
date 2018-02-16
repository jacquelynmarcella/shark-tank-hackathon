import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View extends Component {
  render(){
    return(
     <div>
     	<h1>Games</h1>
     	<h3>Active</h3>

     	<hr />

     	<h5>League: Extraordinary Gentlemen</h5>
     	<p><em>Active</em></p>

     	<h4>{this.props.user.name}</h4>
	     	<div className="">

	      </div>

	     <hr />


     </div>

      );
  }
}

export default View;
