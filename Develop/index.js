// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for your project.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project.',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
        },
    ])
    .then((answers) => {
        const readme = generateMarkdown(answers);
    })
];

// TODO: Create a function to write README file
const writeFile = (data) =>
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
// init()
//     .then(userInput => {
//         return generateMarkdown(userInput);
//     })
//     .then(readme => {
//         return writeFile(readme);
//     }
//     )
//     .catch(err => {
//         console.log(err);
//     }
//     );

