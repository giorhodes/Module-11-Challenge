const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github Username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license?',
    choices: ["MIT", "APACHE 2.0", "GPL", "None"]
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile('README.md', generateMarkdown(response));
  });
}

// function call to initialize program
init();
