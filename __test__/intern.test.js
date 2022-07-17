const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("to test Intern's properties", () => {
      it("test all properties", () => {
        const intern = new Intern ("Taja", "7", "taja@taja.com", "Ohio State University");
  
        expect (intern.employeeName).toEqual("Taja");
        expect (intern.id).toEqual("7");
        expect (intern.email).toEqual("taja@taja.com");
        expect (intern.school).toEqual("Ohio State University");
        
      });
    });

    describe("to test Intern's methods", () => {
        it("test all methods", ()=>{
            const intern = new Intern("Charlie", "3", 'charlie@charlie.com', "Ohio State University");
    
            expect (intern.getName()).toEqual("Charlie");
            expect (intern.getId()).toEqual("3");
            expect (intern.getEmail()).toEqual("charlie@charlie.com");
            expect (intern.getSchool()).toEqual("Ohio State University")
            
            
           
            expect (intern.getRole()).toEqual("Intern");
        });
      });
    });