import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }
  
  handleLogout = (e) => {
    e.preventDefault();
    console.log('handle logout reached');
    //Delete token from local storage
    localStorage.removeItem('sharkHackathonToken');
    //Go back to home page
    this.props.updateUser();
    this.setState({ redirect: true });
  }

  render() {
    if(this.state.redirect){
      return (<Redirect to="/" />);
    }
    else {
      return(
        <a href='/' onClick={this.handleLogout}>Logout</a>
      );
    }
  }
}

export default Logout;