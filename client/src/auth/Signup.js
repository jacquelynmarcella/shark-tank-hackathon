import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token);
      this.props.updateUser();
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    })
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
                <label>Name
                  <input name="Name"
                       placeholder="Name"
                       type="text" 
                       value={this.state.name}
                       onChange={this.handleNameChange}
                  />
                </label>
                <label>
                  Email
                  <input name="Email"
                      type="text"
                       placeholder="Email"
                       value={this.state.email}
                       onChange={this.handleEmailChange} />
               </label>
               <label>
                Password
                  <input name="Password"
                     placeholder="Password"
                     type="password"
                     value={this.state.password}
                     onChange={this.handlePasswordChange} />
                 </label>
                 <input type="submit" value="Sign Up" />
              </form>);
    }
    return (
      <div>
        {form}
        {this.props.user ? <Redirect to="/profile" /> : ''}
      </div>
    );
  }
}

export default Signup;
