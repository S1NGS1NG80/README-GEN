// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === 'None') {
//     return '';
//   }
//   return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'None') {
//     return '';
//   }
//   return `\n* [License](#license)\n`;
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === 'None') {
//     return '';
//   }
//   return `## License\n\nThis project is licensed under the ${license} license.`;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Questions
If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}). You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
}

module.exports = generateMarkdown;
