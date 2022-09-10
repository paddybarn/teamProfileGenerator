const Intern = require("../classes/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school if provided valid arguments", () => {
      const intern = new Intern("Carl", 4, "int@email.com", "Dartmouth");

      expect(intern.name).toEqual("Carl");
      expect(intern.id).toEqual(4);
      expect(intern.email).toEqual("int@email.com")
      expect(intern.school).toEqual("Dartmouth")
    });
  });
});