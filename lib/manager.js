const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(employeeName, id, email);

    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager"
  }

}



module.exports = Manager;