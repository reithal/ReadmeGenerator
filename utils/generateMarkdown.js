function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}
## Table of Contents
## Installation
## Usage
## License

${data.license}
## Contributing

Author / Developed By: ![Image_of_WeatherDashboard](${data.profileImgURL})${data.name}

## Tests

## Questions

if you have any questions please email me at ${data.email}

`;
}

module.exports = generateMarkdown;
