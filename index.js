// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require ("./utils/generateMarkdown");
const { log } = require("console");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Description?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Table of Contents?',
        name: 'tableOfContents',
      },
      {
        type: 'input',
        message: 'Installation?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Usage?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Credits?',
        name: 'credits',
      },
      {
        type: 'input',
        message: 'License?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Contributing?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
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
