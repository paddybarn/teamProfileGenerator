const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email, "Engineer")
        this.Github = Github
    }
}

const test = new Engineer ("Angie", 3, "eng@email.com", "paddybarn")

console.log(test)

module.exports = Engineer