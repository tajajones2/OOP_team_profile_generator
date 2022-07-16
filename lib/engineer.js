const Employee = require("./employee");

class Engineer extends Employee {
  constructor(gitHub) {
    super(employeeName, id, email);

    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
  }


  getRole() {
    return "Engineer"
  }
}

module.exports = Engineer;