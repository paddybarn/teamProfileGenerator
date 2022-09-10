const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and Github if provided valid arguments", () => {
      const engineer = new Engineer("Joe", 2, "joe@email.com", "gitengineer");

      expect(engineer.name).toEqual("Joe");
      expect(engineer.id).toEqual(2);
      expect(engineer.email).toEqual("joe@email.com")
      expect(engineer.Github).toEqual("gitengineer")
    });
  });
});
