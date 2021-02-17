// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");
// you might need one for the badges -- check npmjs.com's libraries

console.log(process.argv);
// console.log(fs);

// An array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectname',
        },
        {
            type: 'input',
            message: 'Please enter a description for your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How is your project installed?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What usage information would you like to provide?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are your contribution guidelines?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'What are your test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Which license is your project protected under?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((response) => {
});

// TODO: Create a function to write README file - doesn't work yet - figure out how to put response in there
function writeToFile(fileName, data) {
    fs.appendFile('new-readme.md', data, (err) => {
        err ? console.error(err) : console.log('success');
        fs.appendFile('new-readme.md', "test")
    })
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// exports