const axios = require("axios");
const api = {
  getUserData(username) {
    return new Promise((resolve,reject)=>{
      // DEBUG console.log("argument: " + username);
      const queryUrl = `https://api.github.com/users/${username}`;
  
      const userInfo = {
        name: "",
        email: "",
        profileImgURL: ""
      }
      axios.get(queryUrl).then(function(res) {
        // DEBUG console.log("axio ",res.data);
        userInfo.name = res.data.name;
        userInfo.email = res.data.email;
        userInfo.profileImgURL = res.data.avatar_url;
        // DEBUG console.log("then from api userinfo ", userInfo);
        resolve(userInfo);
        
      }).catch((err) => reject(err));
    })
    
    
  }
};

module.exports = api;
