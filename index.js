const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./classes/Engineer.js")
const Intern = require("./classes/Intern.js")
const Manager = require("./classes/Manager.js")
const generateHTML = require("./utils/generateHTML.js")

const team = []
const init = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter Manager name",
            name: "managerName"
        },
        {
            type: "number",
            message: "Enter Employee ID",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter Employee Email",
            name: "managerEmail"
        },
        {
            type: "number",
            message: "Enter Office Number",
            name: "managerOfficeNumber"
        },
    ])  .then ((emp) => {
        const {managerName, mangerId, managerEmail, managerOfficeNumber} = emp
        const manager = new Manager (managerName, mangerId, managerEmail, managerOfficeNumber)
        team.push(manager)
        anotherTeamMember()
    })
}

const anotherTeamMember = () => {
    return inquirer.prompt ([
        {
            type: "list",
            message: "Which employee profile would you like to generate?",
            name: "nextEmployee",
            choices: ["Engineer", "Intern", "Generate Team"],
            
        }
    ]) .then ((next) => {
        
            console.log(team)
            if(next.nextEmployee === "Engineer") {
                return generateEngineer()
            } else if(next.nextEmployee === "Intern") {
                return generateIntern()
            } else if(next.nextEmployee === "Generate Team"){
            const HTML = generateHTML (team)
            fs.writeFile("./dist/index.html", HTML, (err) => err ? console.log("You missed some fields, please start over") : console.log("HTML generated"))
            
}})
}

const generateEngineer = () => {
    return inquirer.prompt([
            {
                type: "input",
                message: "Enter Engineer name",
                name: "engineerName"
            },
            {
                type: "number",
                message: "Enter Employee ID",
                name: "engineerId"
            },
            {
                type: "input",
                message: "Enter Employee Email",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "Enter Github",
                name: "engineerGithub"
            },
    ]) .then((eng) => {
        const {engineerName, engineerId, engineerEmail, engineerGithub} = eng
        const engineer = new Engineer (engineerName, engineerId, engineerEmail, engineerGithub)
        team.push(engineer)
        anotherTeamMember()
    })
}

const generateIntern = () => {
    return inquirer.prompt([
            {
                type: "input",
                message: "Enter Intern name",
                name: "internName"
            },
            {
                type: "number",
                message: "Enter Intern ID",
                name: "internId"
            },
            {
                type: "input",
                message: "Enter Intern Email",
                name: "internEmail"
            },
            {
                type: "input",
                message: "Enter Intern's School",
                name: "internSchool"
            },
    ]) .then((int) => {
        const {internName, internId, internEmail, internSchool} = int
        const intern = new Intern (internName, internId, internEmail, internSchool)
        team.push(intern)
        anotherTeamMember()
    })
}

init()