# Team Profile Generator

## Description

As a manager we wanted to create a webpage that displays our teams basic information for profiles. This will provide a qucik and esay way to access emails and GitHub profiles.

This project will demonstrate creating an application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each team member using a Node.js command-line.


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Steps for installation:

1. Download Repository 
2. Install "nodejs" from https://nodejs.org/en/download/
3. While in terminal under the reposirtory directory run the "npm i" command

## Usage

- When given a command-line, application accepts user input.
- When prompted for team members and their information an HTML file is generated that displays a nicely formatted team roster based on user input.
- When you click on an email address in the HTML then your default email program opens and populates the TO field of the email with the address
- When you click on the GitHub username then that GitHub profile opens in a new tab
- When the application is started you are then prompted to enter the team manager’s name, employee ID, email address, and office number.
- When the team manager’s name, employee ID, email address, and office number are entered you are then presented with a menu with the option to add an engineer or an intern or to finish building my team.
- When the engineer option i selected you are then prompted to enter the engineer’s name, ID, email, and GitHub username, and taken back to the menu.
When the intern option is selcted
you are then prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.
- When the team building is finished you can then exit the application, and the HTML is generated.

![screenshot](./images/team%20profile.png)

## Credits

I credit myself, Taja Jones, for completing a Team Profile Generator by using javascript, nodejs and inquirer.

## License

MIT License

Copyright (c) 2022 Taja Jones

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests

For this application, test files are included within the "__test__" folder directory. To excute and run these test files, open a terminal and install packages by running (npm i) and then run (npm test).
