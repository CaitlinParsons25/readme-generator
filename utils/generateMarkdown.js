// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseLink = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Creative_Commons: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    Unilicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  return licenseLink[license]
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license ) {
    return '';
  } else {
    return renderLicenseBadge(license)
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseDetails = renderLicenseSection(data.license)
  return `
  # ${data.title}

  ## Table of contents
  - [project description](#Description)
  - [installation](#Installation)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution guidelines
  ${data.contribution}

  ## Test instructions
  ${data.test}

  ## License
  ${licenseDetails}

  ## GitHub link
  [!Profile](https://github.com/${data.username})

  ## Email
  [!Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
