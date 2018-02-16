import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then((result) => {
      localStorage.setItem('sharkHackathonToken', result.data.token);
      this.setState({ success: true });
      this.props.updateUser();
    }).catch((error) => {
      console.log('error returned', error.response.data);
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    });
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
                <label>
                  Email
                  <input name="Email"
                       placeholder="Email"
                       type="text" 
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                  />
                </label>
                <label>
                Password
                  <input name="Password"
                       placeholder="Password"
                       type="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                  />
                </label>
                <input type="submit" value="Login" />
              </form>);
    }
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default Login;
