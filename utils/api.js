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
      console.log("name: "+ userInfo.name);

      /*userInfo.email = res.data.map(function(user) {
        return user.email;
      });
      
      userInfo.profileImgURL = res.data.map(function(user) {
        return user.avatar_url;
      });
      */
      
    }).then(function(res) {
      return userInfo;
    }).catch((err) => console.log(err));

   

    
  }
};


module.exports = api;
