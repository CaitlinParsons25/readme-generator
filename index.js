// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should your project be used?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Who are the other contributors to your project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?'
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Did you use a license?',
        default: false
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license did you use?',
        choices: ['MIT', 'Creative_Commons', 'Unilicense']
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }
      ])
      .then((answers) => {
        console.log(answers);
        let result = generateMarkdown(answers);
        writeToFile('./output/readMe.md', result)
      })
      .catch((error) => {
        console.log(error)
      })
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data);
    // file written successfully
    console.log(`${fileName} generated successfully`)
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
