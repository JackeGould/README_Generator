// # ${title}
// ## ${description}
// ## ${installation}
// ## ${usage}
// ## ${contribution}
// ## ${test}
// ## ${license}`;

const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your READEME title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter your installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter your usage information.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your contribution guidelines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter your test instructions',
        },
        {
            type: 'list',
            message: 'Please choose a license.',
            name: 'license',
            choices: ['MIT License', 'The Unlicense', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please add your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
        },
    ]);
};

const generateReadMe = ({ title, description, installation, usage, contribution, test, license, github, email }) =>
    `
    ![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />

  # ${title}

  ## Description

  ${description}

  # Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)
  
  ## Installation 
  
  ${installation}
  
  ## Usage 
  
  ${usage}
  
  ## Contribution 
  
  ${contribution}
  
  ## Test 
  
  ${test}
  
  ## License 
  
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 
  
  ## Questions 

  If you have any additional questions regarding this respository, please feel free to reach me via the email address provided below.
  
  ${github}
  
  ${email}
  
  `;

const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeFile('readme.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
};

function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else {
        return '';
    }
}

init();




// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// DONE Uses the Inquirer package 
// DONE Reformat the ReadMe file so its not in an HTML format

// Does Table of Contents require user input/choice???
// What am I supposed to be doing with my email and GitHub?? Is it my email/github or the users ??? Im assuming the users.
// Add badges to generate markdown js file
// Store as images