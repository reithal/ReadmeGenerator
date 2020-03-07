function generateMarkdown(data) {
  // DEBUG: console.log("at generate");
  return `
# ${data.title}

[!Followers](https://img.shields.io/github/followers/${data.username}?style=social)

## Description

${data.description}

## Table of Contents

## Installation

## Usage

  Please insert the usage purpose of your project here.

## License

This project is licensed under the ${data.license} license.

## Contributing

Author / Developed By: ![Image_of_Developer](${data.profileImgURL}) 
Username: ${data.username}

## Tests

To run tests, run the following command:

    ${data.instructions}

## Questions

if you have any questions please email me [${data.name}]  at ${data.email}
`;
}

module.exports = generateMarkdown;
