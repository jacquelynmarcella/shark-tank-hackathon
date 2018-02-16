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
	     	<div className="influencerOption">
		      <div className="influencerImg">
		          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
		        </div>
		        <div className="influencerContent">
		          <h5>Name</h5>
		          <p className="increase">+.08%</p>
		        </div>
	      	</div>
	      	 <div className="influencerOption" id={this.props.id}>
		        <div className="influencerImg">
		          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
		        </div>
		        <div className="influencerContent">
		          <h5>Name</h5>
		          <p className="increase">+2.01%</p>
		        </div>
	      	</div>
	      	  <div className="influencerOption" id={this.props.id}>
		        <div className="influencerImg">
		          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
		        </div>
		        <div className="influencerContent">
		          <h5>Name</h5>
		          <p className="decrease">-.10%</p>
		        </div>
	      	</div>

	      	<h4>Jim Bob</h4>
	     	<div className="influencerOption">
		      <div className="influencerImg">
		          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
		        </div>
		        <div className="influencerContent">
		          <h5>Name</h5>
		          <p className="decrease">+.01%</p>
		        </div>
	      	</div>
	      	 <div className="influencerOption" id={this.props.id}>
		        <div className="influencerImg">
		          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
		        </div>
		        <div className="influencerContent">
		          <h5>Name</h5>
		          <p className="increase">+.01%</p>
		        </div>
	      	</div>
	      	  <div className="influencerOption" id={this.props.id}>
		        <div className="influencerImg">
		          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
		        </div>
		        <div className="influencerContent">
		          <h5>Name</h5>
		          <p className="decrease">-.03%</p>
		        </div>
	      	</div>

	     <hr />


     </div>

      );
  }
}

export default View;
