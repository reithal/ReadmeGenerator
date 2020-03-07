const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs"); 


// Array of questions to prompt user
const questions = [{

  message: "Enter your GitHub username:",
  name: "username"  
},
{
  message: "What is the project title:",
  name: "title"
},
{
  message: "What is the description of this project:",
  name: "description"
},
{
  message: "What is the installation instructions:",
  name: "instructions"
},
{
  message: "What is the license type (e.g. MIT):",
  name: "license"
}
];

function writeToFile(fileName, data) {

  fs.appendFile(fileName, data, (err) => {
    if (err) {console.log("Could create readme.md file. Error: ", err)}
    else 
      console.log("File created successfully!")
  }) 
  };


function init() {
  let data;
  inquirer.prompt(questions)
  
  .then(async (response) => {
      const user = await api.getUserData(response.username);
      // DEBUG console.log("should wait and here is user: ", user);
      // Combining properties int single variable
      data = {...user,...response };
      let markdown = await generateMarkdown(data);
      // DEBUG console.log("2 - " , markdown)

      // Write out file with username in it.
      writeToFile(`readme-${user.username}.md`, markdown);

  }).catch((err) => console.log(err));
  
};

init();
