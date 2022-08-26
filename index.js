const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./classes/Employee.js")
const Engineer = require("./classes/Engineer.js")
const Intern = require("./classes/Intern.js")
const Manager = require("./classes/Manager.js")

const Team = []
const init = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter Manager name",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter Employee ID",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter Employee Email",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter Office Number",
            name: "managerOfficeNumber"
        },
    ])  .then ((emp) => {
        console.log(emp)
        const {managerName, mangerId, managerEmail, managerOfficeNumber} = emp
        const manager = new Manager (managerName, mangerId, managerEmail, managerOfficeNumber)
        Team.push(manager)
        console.log(Team)
        anotherTeamMember()
    })
}

const anotherTeamMember = () => {
    inquirer.prompt([
        {
            type: "input",
            
        }
    ])
}

init()