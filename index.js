// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What would you like the title of your README.md to be?', 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your application and how it works.', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please explain the steps required to install your project.', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide any necessary instructions and examples for use of your project.', 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project',
            choices: [
                "NONE",
                "AFL-3.0",
                "Apache-2.0",
                "Artistic-2.0",
                "BSL-1.0",
                "BSD-2-Clause",
                "BSD-3-Clause",
                "BSD-3-Clause-Clear",
                "BSD-4-Clause",
                "0BSD",
                "CC",
                "CC0-1.0",
                "CC-BY-4.0",
                "CC-BY-SA-4.0",
                "WTFPL",
                "ECL-2.0",
                "EPL-1.0",
                "EPL-2.0",
                "EUPL-1.1",
                "AGPL-3.0",
                "GPL",
                "GPL-2.0",
                "GPL-3.0",
                "LGPL",
                "LGPL-2.1",
                "LGPL-3.0",
                "ISC",
                "LPPL-1.3c",
                "MS-PL",
                "MIT",
                "MPL-2.0",
                "OSL-3.0",
                "PostgreSQL",
                "OFL-1.1",
                "NCSA",
                "Unlicense",
                "Zlib"
            ] 
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you would like others to contribute to this project, please provide guidelines for how to do so.', 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide examples on how to run any tests included in the application.', 
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide instructions on the best way to contact you with questions about your project.', 
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?', 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?', 
        },
    ]);
};

const init = () => {
    promptUser()
      .then((answers) => writeFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully generated README.md!'))
      .catch((err) => console.error(err));
  };
  
  init();











// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
