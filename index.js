// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require ("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' ]
      },
      {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'List your contribution guidlines',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      
];

inquirer
  .prompt(questions)
  .then((response) =>{
    // console.log(response)
    let markDown = generateMarkdown(response)
    writeToFile('README.md', markDown)
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('Log created!')
})
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
