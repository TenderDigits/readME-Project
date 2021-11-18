// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title',
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
        type: 'input',
        message: 'What license did you use?',
        name: 'license',
        choices: ['ISC License', 'MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => { if (value) {return true} else {return 'input needed to continue'}}
    },
    {
        type: 'inpt',
        message: 'Github username:',
        name: 'github',
        validate: (value) => { if (value) {return true} else {return 'input needed to continue'}}
    },
    {
        type: 'inpt',
        message: 'e-mail address:',
        name: 'email',
        validate: (value) => { if (value) {return true} else {return 'input needed to continue'}}
    }
]
// .then(({
//     title,
//     description,
//     installation,
//     usage,
//     contributors,
//     license,
//     github,
//     email
// }) => {
//     
// },

// // TODO: Create a function to write README file
//     function (template, data) {
//         fs.writeFile(template, data, (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 console.log('Your README has been generated');
//             });
//     },

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data),
        (err) => {
                            if (err) {
                                console.log(err);
                            }
                            console.log('Your README has been generated');
                        });
    })
};

// Function call to initialize app
init();
