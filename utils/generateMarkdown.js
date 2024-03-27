
function renderLicenseBadge(answers) {
    if (answers.license !== "NONE") {
    return `![GitHub License](https://img.shields.io/github/license/${answers.username}/${answers.title})
      `;
    }
    return "";
    }

function renderLicenseLink(answers) {
    if (answers.license === "NONE") {
      return "";
    } else {
      return '[License](#license)'
    }
}

function renderLicenseSection(answers) {
    if (answers.license === "NONE") {
      return "";
    } else {
      return `## License
      The license for this project is ${answers.license}.`
    }
}

function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers)}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(answers)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers)}

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

