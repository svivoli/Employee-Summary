const inquirer = require("inquirer");
const jest = require("jest");
const Joi = require('joi');
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const build = require('./lib/build');
const managerArray = [];
const engineerArray = [];
const internArray = [];

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's ID number?"
        }
    ])
        .then(managerAnswers => {
        const manager = new Manager(
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNumber
        );
        managerArray.push(manager);
        promptEmployee();
    })
};

promptEmployee = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add more team members."
            ]
        }
    ])
        .then(val => {
            if (val.selection === "Engineer") {
                promptEngineer();
            } else if (val.selection === "Intern") {
                promptIntern();
            } else if (val.selection === "I don't want to add more team members.") {
                build(managerArray, internArray, engineerArray);
            }
        })
};

promptEngineer = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID number?"
        }
    ])
        .then(engineerAnswers => {
            const engineer = new Engineer(
                engineerAnswers.name,
                engineerAnswers.id,
                engineerAnswers.email,
                engineerAnswers.github
            );
            engineerArray.push(engineer);
            promptEmployee();
        })
};

promptIntern = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school did the intern go to?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID number?"
        }
    ])
        .then(internAnswers => {
            const intern = new Intern(
                internAnswers.name,
                internAnswers.id,
                internAnswers.email,
                internAnswers.school
            );
            internArray.push(intern);
            promptEmployee();
        })
};

promptManager();