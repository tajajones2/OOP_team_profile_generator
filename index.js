const inquirer = require("inquirer");

const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// please import Engineer and Intern libraries // check

const indexHTML = require("./src/indexHTML");

const card = require("./card");




//import engineer and intern cards same as manager card above //check

// you must create engineer and intern questions separately // check

const employeeArray = [];
const cardHolder = [];

const managerQuestions = [
  {
    type: "input",

    message: "What is the manager's name?",

    name: "managerName",
  },

  {
    type: "input",

    message: "What is the manager's id?",

    name: "managerId",
  },

  {
    type: "input",

    message: "What is the manager's email?",

    name: "managerEmail",
  },

  {
    type: "input",

    message: "What is the manager's Office number?",

    name: "managerOfficeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",

    message: "What is the engineer's name?",

    name: "engineerName",
  },

  {
    type: "input",

    message: "What is the engineer's id?",

    name: "engineerId",
  },

  {
    type: "input",

    message: "What is the engineer's email?",

    name: "engineerEmail",
  },

  {
    type: "input",

    message: "What is the engineer's github?",

    name: "engineerrOfficeNumber",
  },
];

const internQuestions = [
  {
    type: "input",

    message: "What is the Intern's name?",

    name: "internName",
  },

  {
    type: "input",

    message: "What is the Intern's id?",

    name: "internId",
  },

  {
    type: "input",

    message: "What is the Intern's email?",

    name: "internEmail",
  },

  {
    type: "input",

    message: "What is the Intern's School?",

    name: "internSchool",
  },

];

function init() {
  inquirer

    .prompt(managerQuestions)

    .then((response) => {
      const manager = new Manager(
        response.managerName,

        response.managerId,

        response.managerEmail,

        response.managerOfficeNumber
      );

      employeeArray.push(manager);

      confirmNext();
    });
}

function confirmNext() {
  inquirer
    .prompt([
      {
        type: "confirm",

        message: "Do you want to add more employee?",

        name: "addMore",
      },
    ])

    .then((response) => {
      if (response.addMore === true) {
        addEmployee();
      } else {
        createHTML();
      }
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",

        message: "Do you add Engineer or Intern?",

        choices: ["Engineer", "Intern"],

        name: "selection",
      },
    ])

    .then((response) => {
      if (response.selection === "Engineer") {
        addEngineer();
      } else {
        addIntern();
      }
    });
}

function addEngineer() {
  //ask questions about engineer using inquirer

  inquirer
    .prompt(engineerQuestions)

    .then((response) => {
      // create new instance engineer and add it to the employeeArray using push

      confirmNext();
    });
}

function addIntern() {
  //ask questions about intern using inquirer

  // create new instance intern and add it to the employeeArray using push

  confirmNext();
}

function createHTML() {
  console.log(employeeArray);

  let cards = "";

  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].getRole() === "Manager") {
      cards = cards + manageCard(employeeArray[i]);
    } else if (employeeArray[i].getRole() === "Engineer") {
      //same as manager card but for Enineer card
    } else {
      //same as manager card but for  intern card
    }
  }

  fs.writeFileSync("./dist/team.html", indexHTML (cards));
}

init();
