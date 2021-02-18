// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);
// const badging = require('badging');

console.log(process.argv);
// console.log(fs);

// An array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
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
            // not working yet - need to import the list somehow
            type: 'list',
            message: 'Which license is your project protected under?',
            name: 'license',
            choices: ['choice'],
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
    ]).then(response => {
        console.log(response);
        //console.log(response.github);
        fs.writeFile("readMe.md", JSON.stringify(response), err => {
            if (err) console.err(err);
            else console.log("Success!");
        })
    })
}

// TODO: Create a function to write README file - doesn't work yet - figure out how to put response in there
//function writeToFile(fileName, response) {
    // let fileName = response.title;
    // console.log(fileName);
    // fs.writeFile(fileName);
    // })
//}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
//writeToFile();
promptUser();
