const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const generateHTML = require('./utils/generateHTML');

const fs = require('fs');
const teamData = [];
const inquirer = require("inquirer");
const { time, timeStamp } = require('console');
const { Http2ServerRequest } = require('http2');

const startQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Provide your Id ',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter your Id!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('You need to enter your email!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
]

function writeToFileHTML(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist./Index-test.html', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

function writeToFileCSS() {
    return new Promise((resolve, reject) => {
        var data = `.blue-background{
            background-color: blue;
            color: white;
        }
         /* .external-card{
         box-shadow: black ;
        } */
        .jumbotron{
            background-color: red;
            color: white;
            text-align: center;
        }`
        fs.writeFile('./dist/style-test.css', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


var repeatQuestions = function () {

    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
        .then(repeat => {
            console.log(repeat.confirmAddEmployee)
            if (repeat.confirmAddEmployee) {
                return initializeEmployee();
            } else {
                console.log(teamData)
                writeToFileCSS()
                generateHTML(teamData)
                .then(HTML =>{
                    console.log(HTML)
                    writeToFileHTML(HTML)
                })
                return
            }
        })


}

var initializeEmployee = function () {
        inquirer.prompt(startQuestions)
            .then((employeeData) => {
                //     console.log(employeeData)
                if (employeeData.role === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'officeNumber',
                            message: 'What is your office Number?',
                            validate: officeInput => {
                                if (officeInput) {
                                    return true;
                                } else {
                                    console.log('You need to enter your office Number!');
                                    return false;
                                }
                            }
                        },
                    ])
                        .then(managerData => {
                            console.log(managerData)
                            console.log(teamData)
                            teamData.push(new Manager(employeeData.name, employeeData.id, employeeData.email, managerData.officeNumber))
                            console.log(managerData)
                            console.log(teamData)
                            repeatQuestions()
                        })
                }
                if (employeeData.role === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'Github',
                            message: 'What is your Github profile name?',
                            validate: GithubInput => {
                                if (GithubInput) {
                                    return true;
                                } else {
                                    console.log('You need to enter your Github profile name!');
                                    return false;
                                }
                            }
                        }
                    ])
                        .then(engineerData => {
                            console.log(engineerData)
                            console.log(teamData)
                            teamData.push(new Engineer(employeeData.name, employeeData.id, employeeData.email, engineerData.Github))
                            console.log(engineerData)
                            console.log(teamData)
                            repeatQuestions()
                        })

                }
                if (employeeData.role === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What school are you attending?',
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log('You need to enter your school!');
                                    return false;
                                }
                            }
                        }
                    ])
                        .then(internData => {
                            console.log(internData)
                            console.log(teamData)
                            teamData.push(new Intern(employeeData.name, employeeData.id, employeeData.email, internData.school))
                            console.log(internData)
                            console.log(teamData)
                            repeatQuestions()
                        })

                }
                else {
                    return
                }
            })
}

initializeEmployee()