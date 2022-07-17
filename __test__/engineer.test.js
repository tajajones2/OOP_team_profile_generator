const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("to test Engineer's properties", () => {
      it("test all properties", () => {
        const engineer = new Engineer("Taja", "7", "taja@taja.com", "https://github.com/tajajones2");
  
        expect(engineer.employeeName).toEqual("Taja");
        expect(engineer.id).toEqual("7");
        expect(engineer.email).toEqual("taja@taja.com");
        expect(engineer.gitHub).toEqual("https://github.com/tajajones2");
      });
    });

    describe("to test Engineer's methods", () => {
        it("test all methods", ()=>{
            const engineer = new Engineer("Charlie", "3", 'charlie@charlie.com', "https://github.com/tajajones2");
    
            expect(engineer.getName()).toEqual("Charlie");
            expect(engineer.getId()).toEqual("3");
            expect(engineer.getEmail()).toEqual("charlie@charlie.com");

            
            expect(engineer.getGitHub()).toEqual("https://github.com/tajajones2");
            expect(engineer.getRole()).toEqual("Engineer");
        });
      });
    });