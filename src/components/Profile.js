import React, { Component } from 'react';
import '../design/RecipeStyle.css';
import axios from 'axios';

class Profile extends Component {

  constructor(props){
    super(props);

    this.state={
      userID: props.userID, //props from the link
      //Array
      docData: []
    }
  }

  componentDidMount(){
    console.log("Profile didMount: " + this.state.userID);
    // API request
    axios.post('http://localhost/API_Data/getDoctors.php',  {
        userRole: 'Aerzte',
        userID: this.state.userID
      })
    .then((response) => {
        if(response.data === "Keine Angaben enthalten"){
          console.log("Profile didMount noresponse: " + JSON.stringify(this.state.docData));
        }else{
          this.setState({docData: response.data});
          //console.log("Profile didMount response: " + JSON.stringify(this.state.docData));
        }
    })
    .catch((error) => {
      console.log('error', error);
    })

  }

  render() {

    return (
      <div className="ContentHandler">
        <h1 className="contentTitle">Profil</h1>
        <br/>
        {/*set doc Info when response is correct*/}
        { (this.state.docData !== "" && this.state.docData !== "Keine Angaben enthalten") ?
            (
              this.state.docData.map(function(data, i){
                return  <div key={data.id_LANR}>
                            <p className="profileInfo"><b>Name:</b> &emsp;{data.doc_title + " " + data.doc_firstName + " " + data.doc_lastName}</p>
                            <p className="profileInfo"><b>LANR:</b> &emsp;{data.id_LANR}</p>
                            <p className="profileInfo"><b>Betrieb:</b> &emsp;{data.doc_office_name}</p>
                            <p className="profileInfo"><b>Telefonnummer:</b> &emsp;{data.office_phone}</p>
                            <p className="profileInfo"><b>Adresse:</b> &emsp;{data.adress_street + " " + data.adress_street_nr + ", " + data.adress_PLZ + " "  + data.adress_city}</p>
                        </div>
              }

              )
            )
          : "Keine Angaben"
        }

      </div>
    );
  }
}

export default Profile;
