import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



// const Info = (list) => (
//    if(!list) return;
//    list.map((inf)=> (
//     <div>
//         <img src='{inf.imageUrl}' />
//         <div>
//            Name: {inf.name}
//         </div>
//         <div>
//
//         </div>
//     </div> ))
// )

class Backend extends Component {

   constructor(props) {
      super(props);

      this.state={
         influencers: {}
      }
   }

   componentDidMount = () => {
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

  render() {
   //   console.log(Object.keys(this.state.influencers));

     var inf2 = [];
     for (var inf in this.state.influencers) {
        inf2.push(this.state.influencers[inf])
     }


    return(
     <div>
     	Backend
      <div>

      {inf2.map(item => (<div>
         <h1>{item.name}</h1>
         <img src={item.imageUrl} />
         </div>
      ))}
      </div>

     </div>



      );
  }
}

export default Backend;
