// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require ("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Project Title',
      },
      {
        type: 'input',
        message: 'Description?',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'Table of Contents?',
        name: 'Table of Contents',
      },
      {
        type: 'input',
        message: 'Installation?',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Usage?',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'Credits?',
        name: 'Credits',
      },
      {
        type: 'input',
        message: 'License?',
        name: 'License',
      },
      {
        type: 'input',
        message: 'Contributing?',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'Tests?',
        name: 'Tests',
      },
      {
        type: 'input',
        message: 'Questions?',
        name: 'Questions',
      },
      
];

inquirer
  .prompt(questions)
  .then((response) =>{
    console.log(response)
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
