import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Backend extends Component {

   constructor(props) {
      super(props);

      this.state={
         influencers: {}
      }
   }

   componentDidMount() {

      axios.post('/influencers')
        .then(function (response) {
          this.setState({influencers: JSON.parse(response.data)});
        })
        .catch(function (error) {
          console.log(error);
        });

   }

  render() {
    const infList = Object.keys(this.state.influencers).forEach((inf)=> {
      <div>
          <img src='{inf.imageUrl}' />
          <div>
             Name: {inf.name}
          </div>
          <div>

          </div>
      </div>
   });

    return(
     <div>
     	Backend
      <div>
         { infList }
      </div>
     </div>



      );
  }
}

export default Backend;
