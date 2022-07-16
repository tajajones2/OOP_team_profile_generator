const Employee = require ('./employee')

class Intern extends Employee {
    constructor(school) {
        super(employeeName, id, email)

    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    this.school = school
    }

  
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;