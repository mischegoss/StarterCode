import axios from "axios";

// This uses Axios. Axios is an easy way to get this done!!!!  

export default {
  // Gets something

  getSomething: function(q) {
    return axios.get("/api/something", { params: { q: "title:" + q } });
  },

  // Saves data to the database
  saveSomething: function(somethingData) {
    return axios.post("/api/something", somethingData);
  }
};
