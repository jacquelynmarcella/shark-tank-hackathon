import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      startDate: '',
      inviteKey: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Axios call for creating new league; this may exist in another component but need to pass the data through here")
  }

  componentDidMount = () => {
    //Random generator for short shareable key
    let randomKey = Math.random().toString(36).replace(/[^A-Za-z0-9]+/g, '').substr(0, 5).toUpperCase();
    this.setState({
      inviteKey: randomKey
    })
  }

  render(){
    return(
     <div>
      <h1>Create Your League</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          League Name
          <input name="name" placeholder="Name" type="text" onChange={this.handleChange} value={this.state.name} required />
          </label>
          <label>
          Start Date
          <input name="startDate" type="date" onChange={this.handleChange} required />
          </label>
        </form>
        <input type="button" value="Invite Friends" disabled />
        <input type="submit" value="Create League" onClick={this.handleSubmit} />
        <h3>Copy to invite friends:</h3>
        <p>{this.state.inviteKey}</p>
     </div>

      );
  }
}

export default Create;
