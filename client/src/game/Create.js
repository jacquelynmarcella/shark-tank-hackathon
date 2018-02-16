import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InfluencerOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false,
      influencers: {}
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

    var imageUrl = this.props.imageUrl;

    return(
      <div className={selectedClass} id={this.props.id}>
        <div className="influencerImg">
          <img src={this.props.data.imageUrl} />
        </div>
        <div className="influencerContent">
          <h3>{this.props.data.name}</h3>
          <p>{this.props.data.followers} followers</p>
          <button onClick={this.handleClick} id={this.props.data.name}>+</button>
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
    let userId = this.props.user.id;
    let base = this;

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
      console.log("Axios call");

      axios.post('/leagues/add',{
        data: base.state,
        user: userId
      }).then(response => {
        console.log("Got through post route", response)
        base.setState({creationStage:"step3"});
      }).catch(err => {
        console.log("error from backend", err)
      })
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

    var base = this;

    axios.post('/influencers')
        .then(function (response) {
           console.log(response.data);
          base.setState({influencers: JSON.parse(response.data) });
        })
        .catch(function (error) {
          console.log(error);
        });



  }

  render(){
    var display;
    var message;

     var inf2 = [];
     for (var inf in this.state.influencers) {
        inf2.push(this.state.influencers[inf])
     }

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
          <p className="inviteFriends">{this.state.inviteKey}</p>
        </div>
      );
    }
    else if(this.state.creationStage === "step2") {
        display = (
          <div>
            <h1>Pick your team</h1>
            <p>Select up to 3 players</p>

              {inf2.map(item => (

                <InfluencerOption handleSelect={this.handleSelect} data={item} />

              ))}

            <br />
            <center>
              {this.state.message}<br />
             <input type="submit" value="Create League" onClick={this.handleSubmit} />
            </center>
             <br /><br /><br />
          </div>
        );

    }
    else if(this.state.creationStage === "step3") {

      var infList = [];
      console.log(123);
      console.log(this.state.influencers)
      // console.log(this.state.selectedList)
      for (inf in this.state.influencers) {
         inf = ""+inf;
         for(let j=0; j<this.state.selectedList.length; j++) {
            if(this.state.influencers[inf].name==this.state.selectedList[j]) {
               infList.push(this.state.influencers[inf]);
               console.log(this.state.influencers[inf])
            }

         }
      }

      display = (
        <div>
          <h2>League: {this.state.name}</h2>
          <p></p>

            {infList.map(item => (
               <div id={this.props.id} className="influencerOption unselected">
                <div className="influencerImg">
                  <img src={item.imageUrl} />
                </div>
                <div className="influencerContent">
                  <h3>{item.name}</h3>
                  <p>{item.followers} followers</p>
                </div>
              </div>

            ))}

          <br />
          <center>
            <h3>Copy to invite friends:</h3>
            <p className="inviteFriends">{this.state.inviteKey}</p>
          </center>
          <br /><br /><br />
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
