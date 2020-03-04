const axios = require("axios");
const api = {
  getUserData(username) {
    console.log("argument: " + username);
    const queryUrl = `https://api.github.com/users/${username}`;

    const userInfo = {
      name: "",
      email: "",
      profileImgURL: ""
    }
    axios.get(queryUrl).then(function(res) {
      //console.log(res);
      userInfo.name = res.data.name;
      userInfo.name = res.data.email;
      userInfo.profileImgURL = res.data.avatar_url;
      
      
    }).then(function(res) {
      return userInfo;
    }).catch((err) => console.log(err));

   

    
  }
};


module.exports = api;
