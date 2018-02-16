import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InfluencerOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  //On click, add to data
  handleClick = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("event.target attr",event.target);
    console.log("event target id", event.target.id);
    this.props.handleSelect(event.target.id);
    if (this.state.selected === false){
      this.setState({
        selected: true
      })
    }
    else {
      this.setState({
        selected: false
      })
    } 
    console.log(this.state);
  }

  render(){
    var selectedClass;
    if (this.state.selected) {
      selectedClass = "influencerOption selected"
    }
    else {
      selectedClass = "influencerOption unselected"
    }
    return(
      <div className={selectedClass} id={this.props.id}>
        <div className="influencerImg">
          <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
        </div>
        <div className="influencerContent">
          <h5>Name</h5>
          <p>Stats</p>
          <p>Stats</p>
          <button onClick={this.handleClick} id={this.props.id}>+</button>
        </div>
      </div>
    )

  }
}

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      startDate: '',
      inviteKey: '',
      creationStage: 'step1',
      selectedList: [],
      message: ''
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
    if(this.state.creationStage === "step1") {
      this.setState({
        creationStage: "step2"
      })
    }
    else if(this.state.creationStage === "step2") {
      if(this.state.selectedList.length > 3) {
        this.setState({
          message: 'You can only select 3 players for your team.'
        })
      }
      console.log("Axios call for creating new league; this may exist in another component but need to pass the data through here")
    }
  }

  handleSelect = (data) => {
    console.log("handleSubmit in parent",data);
    let selectedPeople = this.state.selectedList

    if (selectedPeople.includes(data)) {
      for (var i=selectedPeople.length-1; i>=0; i--) {
          if (selectedPeople[i] == data) {
            selectedPeople.splice(i, 1);  
          }
      }
    } else {
      selectedPeople.push(data);
    }

    this.setState({
      selectedList: selectedPeople
    })

    console.log(this.state)
  }
    
  componentDidMount = () => {
    //Random generator for short shareable key
    let randomKey = Math.random().toString(36).replace(/[^A-Za-z0-9]+/g, '').substr(0, 5).toUpperCase();
    this.setState({
      inviteKey: randomKey
    })
  }

  render(){
    var display; 
    var message;

    if(this.state.creationStage === "step1") {
      display = (
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
    else if(this.state.creationStage === "step2") {
        display = (
          <div>
            <h1>Pick your team</h1>
            <p>Select up to 3 players</p>
            <InfluencerOption handleSelect={this.handleSelect} id="1" />
            <InfluencerOption handleSelect={this.handleSelect} id="2" />
            <InfluencerOption handleSelect={this.handleSelect} id="3" />
            <InfluencerOption handleSelect={this.handleSelect} id="4" />
            <InfluencerOption handleSelect={this.handleSelect} id="5" />
            <InfluencerOption handleSelect={this.handleSelect} id="6" />
            <InfluencerOption handleSelect={this.handleSelect} id="7" />
            <InfluencerOption handleSelect={this.handleSelect} id="8" />
            <InfluencerOption handleSelect={this.handleSelect} id="9" />
            <InfluencerOption handleSelect={this.handleSelect} id="10" />
            <InfluencerOption handleSelect={this.handleSelect} id="11" />
            <InfluencerOption handleSelect={this.handleSelect} id="12" />
            <br />
            <center>
              {this.state.message}<br />
             <input type="submit" value="Create League" onClick={this.handleSubmit} />           
            </center>
          </div>
        );

    }

    return(
     <div>
        {display}
     </div>

      );
  }
}

export default Create;
