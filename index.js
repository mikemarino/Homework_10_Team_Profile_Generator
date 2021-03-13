const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// empty array to store employees
let employees = [];

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
    promptUser();
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
                    name: 'github',
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
                const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
                employees.push(engineer);
                if (answer.addToTeam === "Add New Engineer") {
                    addEngineer();
                } else if (answer.addToTeam === "Add New Intern") {
                    addIntern();
                } else {
                    generateHTML()
                }
            })
    }
    promptUser();

}

function addIntern() {

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
                    name: 'school',
                    message: 'What is the Interns School?',
                },
                {
                    type: 'list', //change to list
                    name: 'addToTeam',
                    message: 'Add a new Team Member or Complete Team',
                    choices: ["Add New Engineer", "Add New Intern", "Complete"]
                },
            ])
            .then(answer => {
                const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
                employees.push(intern);
                if (answer.addToTeam === "Add New Engineer") {
                    addEngineer();
                } else if (answer.addToTeam === "Add New Intern") {
                    addIntern();
                } else {
                    generateHTML();

                }
            })
    }
    promptUser();

}

function generateHTML() {

    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>My Team</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
<style>
body {margin-bottom: 15px;}
.card {margin-bottom: 15px;}
</style>
</head>
<body>
<div div class = "jumbotron text-center bg-info text-white-50" >
<h1>New Team Profile</h1>
</div>
<div class="container">
<div class="row">
`

    for (let employee of employees) {
        // console.log(employee.constructor.name);

        switch (employee.constructor.name) {
            case "Manager":
                html = html + `
                <div class="col-md-4 col-lg-4">
                <div class="card">
                <div class = "card-header bg-success text-white" >
                <h2>${employee.getName()}</h2>
                <h3><i class="fas fa-user-tie"></i> ${employee.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getID()}</li>
                <li class="list-group-item">Office: ${employee.getOffice()}</li>
                <li class="list-group-item"> Email: <a href = "mailto:${employee.getEmail()}"> ${employee.getEmail()} </a></li>
                </ul>
                </div>
                </div>
                `
                break;
            case "Engineer":
                html = html + `
                <div class="col-md-4 col-lg-4">
                <div class="card">
                <div class = "card-header bg-primary text-white">
                <h2>${employee.getName()}</h2>
                <h3><i class="far fa-lightbulb"></i> ${employee.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getID()}</li>
                <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                <li class="list-group-item"> Email: <a href = "mailto:${employee.getEmail()}"> ${employee.getEmail()} </a></li>
                </ul>
                </div>
                </div>
                `
                break;
            case "Intern":
                html = html + `
                <div class="col-md-4 col-lg-4">
                <div class="card">
                <div class = "card-header bg-warning text-white">
                <h2>${employee.getName()}</h2>
                <h3><i class="fas fa-graduation-cap"></i> ${employee.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getID()}</li>
                <li class="list-group-item">School: ${employee.getSchool()}</li>
                <li class="list-group-item"> Email: <a href = "mailto:${employee.getEmail()}"> ${employee.getEmail()} </a></li>
                </ul>
                </div>
                </div>
                `
                break;
        }
    }

    html = html +
        `</div>
        </body>
        </html>
        `
    fs.writeFile('./dist/newTeam.html', html, (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log('Successfully wrote to myTeam.html')
    });
}

function init() {
    newTeam();
}

init();


// #########################################
// ###### old code for retention
// #########################################

//  employees.Manager.getRole();

// employees.forEach(function (value, index, array) {
//     // console.log(value);
//     console.log(index);
//     // console.log(array);
// });

//             for(let i = 0; l = employees.items.length; i < l; i++) {

// }

// for (let i = 0, l = employees.length; i < l; i++) {
//     // `i` will take on the values `0`, `1`, `2`,..., i.e. in each iteration
//     // we can access the next element in the array with `data.items[i]`, example:
//     // 
//     var obj = employees.Manager[i].name;
//     console.log(obj);
//     var obj2 = employees.Intern[i].name;
//     console.log(obj2);
//     // Since each element is an object (in our example),
//     // we can now access the objects properties with `obj.id` and `obj.name`. 
//     // We could also use `data.items[i].id`.
// }
// generateHTML(); // need to make this function
// console.log('All Done!');
// console.log(Object.entries(Manager));
// console.log("----------------------");
// console.log(Object.getOwnPropertyDescriptor(employees));
// console.log("----------------------");
// console.log(Object.getOwnPropertyNames(employees));
// console.log("----------------------");
// console.log(Object.getPrototypeOf(employees));
// console.log("----------------------");
// console.log(Object.is(employees));
// console.log("----------------------");
// console.log(Object.prototype.valueOf(employees));
// console.log("----------------------");
// console.log(Object.values(employees));
// console.log("----------------------");
// console.log(Object.fromEntries(employees));
// console.log("----------------------");