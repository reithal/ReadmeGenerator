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
  
  inquirer.prompt(questions).then(function(response) {
      const user = api.getUserData(response.username);
      //console.log("const object :" + user);
      let data = {...user,...response };
      console.log("1 - " , data);
      let markdown = generateMarkdown(data);
      console.log("2 - " , generateMarkdown(data))

  })
  


}

init();
