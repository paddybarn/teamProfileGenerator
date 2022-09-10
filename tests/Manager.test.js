const Manager = require("../classes/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and officeNumber if provided valid arguments", () => {
      const manager = new Manager("Joe", 2, "you@email.com", 2);

      expect(manager.name).toEqual("Joe");
      expect(manager.id).toEqual(2);
      expect(manager.email).toEqual("you@email.com")
      expect(manager.officeNumber).toEqual(2)
    });
  });
});