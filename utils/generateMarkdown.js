// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
    if (answers.license === "NONE") {
      return "";
    } else {
      return `![GitHub License](https://img.shields.io/github/license/${answers.username}/${answers.title})
      `
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
    if (answers.license === "NONE") {
      return "";
    } else {
      return '[License](#license)'
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
    if (answers.license === "NONE") {
      return "";
    } else {
      return `## License
      The license for this project is ${answers.license}.`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(answers.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers.license)}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  * https://github.com/${answers.username}
  * ${answers.email}
  * ${answers.questions}

`;
}

module.exports = {generateMarkdown};
