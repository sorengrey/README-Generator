// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");

console.log(process.argv);
// console.log(fs);

// An array of questions for user input - will probably need another array for the license options for the use to select from
const questions = ['What is the title of your project?', 'Please enter a description for your project.', 'How is your project installed?', 'What usage information would you like to provide?', 'What are your contribution guidelines?', 'What are your test instructions?', 'Which license is your project protected under?', 'What is your GitHub username?', 'What is your email address?'];

// TODO: Create a function to write README file - figure out how to put your data in
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