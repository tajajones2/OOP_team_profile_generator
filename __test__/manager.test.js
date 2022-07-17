const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("to test Manager's properties", () => {
      it("test all properties", () => {
        const manager = new Manager("Taja", "7", "taja@taja.com", "10");
  
        expect(manager.employeeName).toEqual("Taja");
        expect(manager.id).toEqual("7");
        expect(manager.email).toEqual("taja@taja.com");
        expect(manager.officeNumber).toEqual("10");
        
      });
    });

    describe("to test Manager's methods", () => {
        it("test all methods", ()=>{
            const manager = new Manager("Charlie", "3", 'charlie@charlie.com', "10");
    
            expect(manager.getName()).toEqual("Charlie");
            expect(manager.getId()).toEqual("3");
            expect(manager.getEmail()).toEqual("charlie@charlie.com");
            expect(manager.getOfficeNumber()).toEqual("10");
            
           
            expect(manager.getRole()).toEqual("Manager");
        });
      });
    });