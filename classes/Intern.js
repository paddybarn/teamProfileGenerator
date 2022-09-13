const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, "Intern")
        this.school = school
    }
}

const test = new Intern ("Carl", 7, "int@email.com", "Dartmouth")


module.exports = Intern