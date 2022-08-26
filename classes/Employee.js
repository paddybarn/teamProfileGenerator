class Employee {
    constructor(name, id, email, title) {
        this.name = name
        this.id = id
        this.email = email
        this.title = title
    }
}

const test = new Employee ("Patrick", "1", "me@mail.com", "CEO")
console.log(test)

module.exports = Employee