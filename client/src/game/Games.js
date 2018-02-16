import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Games extends Component {
  render(){
    return(
     <div>
     	<h1>Games</h1>

     	<hr />

     	<h4>League: Extraordinary Gentlemen</h4>
     	<p><em>Active | Ends in 2 days</em></p>

     	<h4>{this.props.user.name}</h4>
	     	<div className="influencerOption">
		      <div className="influencerImg">
		          <img src="https://scontent-sea1-1.cdninstagram.com/vp/2e8c84134b6b96ad150d19a035029532/5B243AFC/t51.2885-19/11850309_1674349799447611_206178162_a.jpg" />
		        </div>
		        <div className="influencerContent">
		          <h5>The Rock</h5>
		          <p className="increase">+.01%</p>
		        </div>
	      	</div>
	 

	      	<h4>Jim Bob</h4>
	     	<div className="influencerOption">
		      <div className="influencerImg">
		          <img src="https://scontent-sea1-1.cdninstagram.com/vp/802a2c394526f711dee4b04811092aaa/5B05D02E/t51.2885-19/s320x320/17883193_940000882769400_8455736118338387968_a.jpg" />
		        </div>
		        <div className="influencerContent">
		          <h5>Kylie Jenner</h5>
		          <p className="decrease">-4.01%</p>
		        </div>
	      	</div>
	      	 <div className="influencerOption" id={this.props.id}>
		        <div className="influencerImg">
		          <img src="https://scontent-sea1-1.cdninstagram.com/vp/86357df6c18e6ed59d52ed29691fceb0/5B0F73D2/t51.2885-19/s320x320/26071962_172697516821900_8681115210095788032_n.jpg" />
		        </div>
		        <div className="influencerContent">
		          <h5>Selena Gomez</h5>
		          <p className="increase">+.01%</p>
		        </div>
	      	</div>
	      	  <div className="influencerOption" id={this.props.id}>
		        <div className="influencerImg">
		          <img src="https://scontent-sea1-1.cdninstagram.com/vp/4b58372b00899ca1bee3d458fcf145ec/5B0DA5F4/t51.2885-19/s150x150/12918039_230227960666719_282379501_a.jpg" />
		        </div>
		        <div className="influencerContent">
		          <h5>Beyonce</h5>
		          <p className="decrease">-.03%</p>
		        </div>
	      	</div>

	      <br /><br /><br />

	      	<h4>League: Extraordinary Gentlemen</h4>
     	<p><em>Past | Completed on 2/14/18</em></p>
     	<p><b>Samantha won</b></p>

     	<h4>{this.props.user.name}</h4>
	     	<div className="influencerOption">
		      <div className="influencerImg">
		          <img src="https://scontent-sea1-1.cdninstagram.com/vp/2e8c84134b6b96ad150d19a035029532/5B243AFC/t51.2885-19/11850309_1674349799447611_206178162_a.jpg" />
		        </div>
		        <div className="influencerContent">
		          <h5>The Rock</h5>
		          <p className="increase">+.08%</p>
		        </div>
	      	</div>
	      	 
	      	<h4>Samantha</h4>
	     	<div className="influencerOption">
		      <div className="influencerImg">
		          <img src="https://scontent-sea1-1.cdninstagram.com/vp/87722735de82fe18959707cce2913cbe/5B0EFCC8/t51.2885-19/s320x320/20633803_159905257904822_3024096755265306624_a.jpg" />
		        </div>
		        <div className="influencerContent">
		          <h5>Justin Bieber</h5>
		          <p className="increase">+4.01%</p>
		        </div>
	      	</div>
	      	  <div className="influencerOption" id={this.props.id}>
		        <div className="influencerImg">
		          <img src="https://scontent-sea1-1.cdninstagram.com/vp/ecfa173305130003e02faf666a57fab3/5B083521/t51.2885-19/s320x320/19228783_1421845407904949_3402248722799656960_a.jpg" />
		        </div>
		        <div className="influencerContent">
		          <h5>Kim Kardashian</h5>
		          <p className="decrease">-.03%</p>
		        </div>
	      	</div>

     </div>

      );
  }
}

export default Games;

