// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message = 'What is the project title',
        name: 'title',
        validate: (value) => {if (value) {return true} else {return 'input needed to continue'}},
    },

    {
        type: 'input',
        message:'Provide a description',
        name: 'description',
        validate: (value) => { if (value) {return true} else {return 'input needed to continue'}}
    },

    {
        type: 'input',
        message:'How do you install your app?',
        name: 'installation',
        validate: (value) => { if (value) {return true} else {return 'input needed to continue'}}
    },

    {
        type: 'input',
        message:'Provide instructions and examples of use',
        name: 'usage',
        validate: (value) => { if (value) {return true} else {return 'input needed to continue'}}
    },

    {
        type: 'input',
        message: 'Who contributed to this project',
        name: 'Contributors',
        validate: (value) => {if (value) {return true} else {return 'input needed to continue'}}
    },

    {
        type: 'inpt',
        message: 'What license did you use?',
        type: 'license',
        choices: ['MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => { if (value) {return true} else {return 'input needed to continue'}}
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();