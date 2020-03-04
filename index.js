const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

const questions = [{

  message: "Enter your GitHub username:",
  name: "username"  
},
{
  message: "What is the project title:",
  name: "title"
},
{
  message: "What is the descrition:",
  name: "description"
},
{
  message: "What is the installation instructions:",
  name: "instructions"
},
{
  message: "What is the license type:",
  name: "license"
}
];

function writeToFile(fileName, data) {
}

function init() {
  
  inquirer.prompt({

      message: "Enter your GitHub username:",
      name: "username"  
  }).then(function({username}) {
      const user = api.getUserData(username);
      //console.log("const object :" + user)

  })
  


}

init();
