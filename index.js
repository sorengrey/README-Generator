// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile);

// An array of prompts for user input
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
            name: 'install',
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
            type: 'list',
            message: 'Which open source license is your project protected under?',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'BSD', 'GPL', 'MPL-2.0'],
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

// the template for the markdown file
const theMarkdown =
`# ${response.title}     ![License](https://img.shields.io/badge/License-${response.license}-blue.svg)

        
### Description
${response.description}

### Table Of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

### Installation <a name="Installation"></a>
How to install: ${response.install}

### Usage <a name="Usage"></a>
${response.usage}

### Contributing <a name="Contributing"></a>
${response.contributions}

### Tests <a name="Tests"></a>
${response.test}

### License <a name="License"></a>
This project is licensed under ${response.license}. For more information about this license, visit [opensource.org](http://www.opensource.org).

### Questions  <a name="Questions"></a>
[Click here to visit my GitHub](http://github.com/${response.github}/)
and if you have any questions, send an email to ${response.email}.`

    // Writes the template and user responses to a markdown file named after the project's title
    const readmeTitle = response.title + ".md";
    fs.writeFile(readmeTitle, theMarkdown, err => {
        // Logs an error in the terminal if one occurs
        if (err) console.err(err);
        // Success message in the terminal
        else console.log("Success! Your README has been generated and saved as " + readmeTitle + ".");
         })
     })
}

// Function that initializes prompts
async function init() {
    promptUser();
}

// Function call that initializes app
init();