// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile);
// const badging = require('badging');

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
        console.log(response);

const theMarkdown =
`# ${response.title}
        
### Description
${response.description}

<div align="center"> ### Table Of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)</div>

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

    const readmeTitle = response.title + ".md";
    fs.writeFile(readmeTitle, theMarkdown, err => {
        if (err) console.err(err);
        else console.log("Success! Your README has been generated and saved as " + readmeTitle + ".");
         })
     })
}

// TODO: Create a function to initialize app
async function init() {
    promptUser();
}

// Function call to initialize app
init();