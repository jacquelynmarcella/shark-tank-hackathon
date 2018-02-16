import React, { Component } from 'react';

class Profile extends Component {
  render(){
    if(this.props.user && this.props.user.name){
      return (
        <div>
        
          <div className="profSection">
            <div className="profPic">
              <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" />
            </div>
            <div className="profContent">
              <h2>{this.props.user.name}</h2>
              <p><b>Games Won:</b> 20</p>
              <p><b>Games Lost:</b> 4</p>
              <p>You're ranked <b>121st</b> out of 1,200,382 players.</p>
            </div>
          </div>

          <div className="profSection">
            
          </div>

        </div>
        );
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
