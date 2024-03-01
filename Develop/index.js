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
  
  This application is covered by the ${license}. 
  
  ## Questions 

  If you have any additional questions regarding this respository, please feel free to reach me via the email address provided below.
  
  ${email}

  Find me on GitHub: [${github}](https://github.com/${github})
  
  `;

const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeFile('readme.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
};


init();


// I was able to write all of my code in one file but cannot figure out the badges.

// The example read me is being added inside of Develop, but i would prefer it be generated outside of Develop, and the real ReadMe.md be added to assets