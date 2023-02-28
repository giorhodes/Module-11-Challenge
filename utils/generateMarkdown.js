function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

### Description

${data.description}

### Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}

### Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

### Usage

\`\`\`
${data.usage}
\`\`\`

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

`;
}

module.exports = generateMarkdown;
