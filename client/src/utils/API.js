import axios from "axios";

export default {
  signIn: function(data) {
    // console.log(data)
    return axios.post("/api/users/signin", data);
  },
  findUser: function(data) {
    // console.log("this is get user")
    // console.log(data)
    return axios.post("/api/users/profile", data);
  },

  newUser: function(newUserData) {
    return axios.post("/api/users/register", newUserData);
  },

  savePlant: function(plantData) {
    console.log(plantData)
    return axios.post("/api/plant/addplant", plantData);
  },

  getSavedPlants: function() {
    return axios.get("/api/plant/all");
  }
};
