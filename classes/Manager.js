const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber
    }
}

const test = new Manager ("Joe", 2, "you@email.com", 2)

console.log(test)

module.exports = Manager