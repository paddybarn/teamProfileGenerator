const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email, "Engineer")
        this.Github = Github
    }
}

const test = new Engineer ("Angie", 8, "eng@email.com", "paddybarn")


module.exports = Engineer