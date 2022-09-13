const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber
    }
}

const test = new Manager ("Joe", 6, "you@email.com", 2)


module.exports = Manager