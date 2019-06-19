import React, { Component } from 'react';
import API from "../../utils/API";
import Header from '../../components/header/header';
import "./profile.css";
import axios from "axios";



class Profile extends Component {
    state = {
        user: "",
        first_name: "",
        zipCode: "",
        about: "",
        id: "",
        email: "",
        plantResults:[],
        plant1: [],
        plant2: [],
      };

    componentDidMount() {        
      console.log(localStorage)
      const currentUser = localStorage.user
      console.log(currentUser)

      // const user  = this.state.user
      const data = currentUser
      console.log(data)
      API.findUser(data).then(res => {
            console.log(res, 'profile call back')
            console.log(res.data.first_name)
            console.log(res.data.zipCode)
            console.log(res.data.id)
            this.setState({first_name: res.data.first_name, zipCode: res.data.zipCode, about: res.data.about, id: res.data.id, email:res.data.email} )
            console.log(this.state.id)
            localStorage.setItem('id', this.state.id)
            localStorage.setItem('user', this.state.email)
            console.log(localStorage)
          })
          .catch(err => console.log(err));
          

      this.loadPlants();

      };

          
      loadPlants = () => {
        axios.get("http://harvesthelper.herokuapp.com/api/v1/plants?api_key=9bbe0cb9fc09ec115e66e1a2908a4d9e")
        .then((result) => {
          this.setState({
            isLoaded: true,
            plantResults: result.data,
            plant1: result.data[0],
            plant2: result.data[4]
          });
          console.log(this.state.plantResults)
          console.log(this.state.plantResults[0])
          const plant1 = this.state.plantResults[0]
          const plant2 = this.state.plantResults[4]
          
          console.log(plant1)
          console.log("this is 2 ", plant2)
          const plants =  this.state.plantResults
       
         plants.forEach(info => console.log(info.name));

        })
        .catch(err => console.log(err));
    }
          
      // };
    

    render() {
        return (
        <div> 
          <Header/>
        <div className="profile-body">
        <div className= "container">
        <div className="profile-holder">
        <div className="row">
            <div >
            <h1>Profile</h1>
            </div>
            </div>
            <div className="row">
            <h3> Hey there, {this.state.first_name}! </h3>
            </div>
            <div className="row">
            <h3>Location: Deltona, FL {this.state.zipCode}</h3>
            </div>
            <div className="row">
            <h3> Headline : {this.state.about}</h3>
            </div>
            </div>
            <div className="garden">
            <div>
              <h1>My Garden</h1>
              <h3>{this.state.plant1.name}</h3>
              <p>{this.state.plant1.description}</p>
              <p>{this.state.plant1.watering}</p>
              <button id="btn" className="btn btn-success">Remove</button>
              <button id="btn" className="btn btn-success">Swap</button>
              <br/>
              <br/>
              <h3>{this.state.plant2.name}</h3>
              <p>{this.state.plant2.description}</p>
              <p>{this.state.plant2.watering}</p>
              <button id="btn" className="btn btn-success">Remove</button>
              <button id="btn" className="btn btn-success">Swap</button>
              <br/>
            </div>
            </div>
          
        </div>
    </div>
     </div>
        )
    }
}


export default Profile;

