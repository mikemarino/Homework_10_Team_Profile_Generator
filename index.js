const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// empty array to store employees 
const employees = [];

function newTeam() {

    // Start a new team by first creating a manager
    // Create an array of questions for user input
    const promptUser = () => {
        return inquirer.prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'What is the Team Managers name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the Team Managers ID?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the Team Manager email?',
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the Team Manager Office Number',
                },
                {
                    type: 'list', //change to list 
                    name: 'addToTeam',
                    message: 'Add a new Team Member',
                    choices: ["Add New Engineer", "Add New Intern"]
                },
            ])
            .then(answer => {
                const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
                employees.push(manager);

                if (answer.addToTeam === "Add New Engineer") {
                    addEngineer();
                } else {
                    addIntern();
                }
            })
    }

    function addEngineer() {

        // Create an array of questions for user input
        const promptUser = () => {
            return inquirer.prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'What is the Engineers name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the Engineers ID?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the Engineers email?',
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the Engineers Github User Name?',
                },
                {
                    type: 'list', //change to list 
                    name: 'addToTeam',
                    message: 'Add a new Team Member or Complete Team',
                    choices: ["Add New Engineer", "Add New Intern", "Complete"]
                },
            ])
            .then(answer => {
                const engineer = new Engineer(answer.name, answer.id, answer.email, answer.officeNumber);
                employees.push(engineer);

                if (answer.addToTeam === "Add New Engineer")
                {
                    addEngineer();
                } else if (answer.addToTeam === "Add New Engineer")
                {
                    addIntern();
                } else {
                    generateHTML(); // need to make this function
                }
            })
        }
    }

function addInter() {

    // Create an array of questions for user input
    const promptUser = () => {
        return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Interns name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Interns ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Interns email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Interns School?',
            },
            {
                type: 'list', //change to list 
                name: 'addToTeam',
                message: 'Add a new Team Member or Complete Team',
                choices: ["Add New Engineer", "Add New Intern", "Complete"]
            },
        ])
    }
}








    function init() {

    }

    init();