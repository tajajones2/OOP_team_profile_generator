const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("to test Employee's properties", () => {
      it("test all properties", () => {
        const employee = new Employee("Taja", "7", "taja@taja.com");
  
        expect(employee.employeeName).toEqual("Taja");
        expect(employee.id).toEqual("7");
        expect(employee.email).toEqual("taja@taja.com");
      });
    });

    describe("to test Employee's methods", () => {
        it("test all methods", ()=>{
            const employee = new Employee("Charlie", "3", 'charlie@charlie.com');
    
            expect(employee.getName()).toEqual("Charlie");
            expect(employee.getId()).toEqual("3");
            expect(employee.getEmail()).toEqual("charlie@charlie.com");
            expect(employee.getRole()).toEqual("Employee");
        });
      });
    });