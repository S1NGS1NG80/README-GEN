// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
       {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
        .then(() => {
            console.log(`${fileName} has been generated!`);
        })
        .catch(err => {
            console.error(err);
        });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
