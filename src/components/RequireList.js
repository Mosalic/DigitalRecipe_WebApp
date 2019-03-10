import React, { Component } from 'react';
import Require from './Require';
import axios from 'axios';

class RequireList extends Component {

  constructor(props){
    super(props);
    this.state = {
        userID: props.userID,
        //Array
        requires: []
    };
  }

  componentDidMount(){
    console.log("RequireList didMount: " + this.state.userID);
    //API request, send data
    axios.post('http://localhost/API_Data/getRequires.php',  {
        userRole: 'Aerzte',
        userID: this.state.userID
      })
    .then((response) => {
        this.setState({requires: response.data});
        console.log("RequireList didMount respone: " + JSON.stringify(this.state.requires));

    })
    .catch((error) => {
      console.log('error', error);
    })

  }

  render() {

    return (
      <div className="ContentHandler">
        <h1 className="contentTitle">Anforderungen</h1>

        {  /*set data for each require, data from the API*/
          this.state.requires.map(require =>
            <Require key = {require.id}
              patFirstName={require.pat_firstName}
              patLastName={require.pat_lastName}
              verNumber={require.ver_nummer}
              id={require.id}
              medicine={require.med_name}
              complaint={require.beschwerden}
              recipeFK={require.id_rezept_fk}
              statusReleased={require.zugelassen}
              docID={this.state.userID}/>
          )
        }

      </div>
    );
  }
}

export default RequireList;
