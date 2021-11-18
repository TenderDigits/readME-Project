// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(liscenseType === 'ISC') {
    yourLicense = `![License: ISC](https://img.shields.io/badge/License-ISC-blue)`
  } else if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `[GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

function generateMarkdown(data) {

  return `# ${data.title}
  ## license 
  ${renderLicenseBadge(license)}`
  };

module.exports = generateMarkdown;


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributors, license, github, email} = data;
  const template = `# ${title}
    
    *[Description](#Description)
    *[Installtion](Installation)
    *[Usage](Usage)
    *[Contributors](Contributors)
    *[License](License)
    
    #Description
    ${description}
    ##Installation{
    ${installation}
    ###Usage
    ${usage}
    ####Contributors
    ${contributors}
    #####License
    ${license}
    
    #Contact
    *GitHub :${github}
    *e-mail :${email}`;

    return template;
}