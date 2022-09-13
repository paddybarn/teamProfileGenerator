class Employee {
    constructor(name, id, email, title) {
        this.name = name
        this.id = id
        this.email = email
        this.title = title
    }
}

const test = new Employee ("Patrick", 9, "me@mail.com", "CEO")


module.exports = Employee