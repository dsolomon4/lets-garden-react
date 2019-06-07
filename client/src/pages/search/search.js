// create a link to move to the swap page

import React, { Component } from 'react';
import API from "../../utils/API"
import axios from "axios";
import Cards from "./card";
// import {AddItem, RequestIem} from "./buttons"
import Header from '../../components/header/header';
import "./search.css";

class Search extends Component {
    state = {
        search_input: "",
        plantResults: [],
        error: "",
        user: "",
        id: ""
      };
    componentDidMount() {

      console.log(localStorage)
      console.log(localStorage.id)
      const currentId = localStorage.id
      this.setState({id: currentId})

      console.log(currentId)
        axios.get("http://harvesthelper.herokuapp.com/api/v1/plants?api_key=9bbe0cb9fc09ec115e66e1a2908a4d9e")
        .then((result) => {
            this.setState({
              isLoaded: true,
              plantResults: result.data
            });
            console.log(this.state.plantResults)
            const plants =  this.state.plantResults
         
           plants.forEach(info => console.log(info.name));

          })
          .catch(err => console.log(err));
      }

      addPlant = plants => {
        // event.preventDefault();
        console.log(localStorage.id)
        const currentId = localStorage.id
        console.log(plants.id)
        console.log(currentId)
        API.savePlant({
          user_id: currentId,
          plant_id: plants.id,
          plant_name: plants.name
        }).then(
          console.log("plant submitted")
        ) 
  
        
      };

    handleInputChange = event => {
        this.setState({ search_input: event.target.value });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        
        const search = this.state.search_input
          console.log(search)

          const plants =  this.state.plantResults
          console.log("submit log", plants)

        //   plants.forEach(info => console.log(info.name));

          };


    

    render() {
        return (
          <div>
            <Header/>
          
            <div id="page-body" className="page-body">
            <div className="">
            <div className="search-form-cont">
            <form id="search-form" >
            <div className="form-group row">
            
            <label id="search-label"> <h3>Search a plant!</h3></label>
            <input  className="form-control search-input"
            value={this.state.search_input}
            name="search_Input"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Kale..."
          />
           <button className="btn btn-outline-dark btn-search" onClick={this.handleFormSubmit}>Search</button>
            </div>
            </form>
            </div>

            <div>
           {this.state.plantResults.filter( plants => plants.name === this.state.search_input).map( plants =>(
           <Cards
           name= {plants.name}
           description= {plants.description}
           watering= {plants.watering}
           pests= {plants.pests}
           key={plants.id}
           onClick={() => this.addPlant(plants)}/>
           
           ))}
           </div>
           </div>
            </div>
            </div>
        )
    }
}


export default Search;