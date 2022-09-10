const Employee = require("../classes/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and title if provided valid arguments", () => {
      const employee = new Employee("Patrick", 1, "me@email.com", "CEO");

      expect(employee.name).toEqual("Patrick");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("me@email.com")
      expect(employee.title).toEqual("CEO")
    });
  });
});