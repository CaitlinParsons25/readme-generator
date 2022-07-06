// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    return inquirer.prompt([
      {
        type: 'text',
        name: 'name',
        message: 'What is your project name?',

      }
      
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Did you use a license?',
        default: false;
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license did you use?',
        choices: ['MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'Creative Commons', 'Eclipse', 'GNU', 'GNU Affero', 'GNU Lesser', 'Mozilla', 'Unilicense']
      }
      ]);
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return questions;
}

// Function call to initialize app
init();
