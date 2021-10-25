const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const fs = require('fs');
// var teamData = [];
const inquirer = require("inquirer");
const { time, timeStamp } = require('console');

const promptManager = employeeData => {
    return inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
        .then((managerData) => {
            console.log(employeeData)
            console.log(managerData)
            employeeData['officeNumber'] = managerData.officeNumber
            employeeData['confirmAddEmployee'] = managerData.confirmAddEmployee
            console.log(employeeData)
            console.log(teamData)
            teamData.push(employeeData);
            console.log(teamData)
        })
        .then(managerData => {
            if (employeeData.confirmAddEmployee) {
                return promptStart(teamData);
            } else {
                return teamData;
            }
        })
}
const promptEngineer = employeeData => {
    return inquirer.prompt([
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
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
        .then((engineerData) => {
            console.log(employeeData)
            console.log(engineerData)
            employeeData['Github'] = engineerData.Github
            employeeData['confirmAddEmployee'] = engineerData.confirmAddEmployee
            console.log(employeeData)
            console.log(teamData)
            teamData.push(employeeData);
            console.log(teamData)
        })
        .then(engineerData => {
            if (employeeData.confirmAddEmployee) {
                return promptStart(teamData);
            } else {
                return teamData;
            }
        })
}
const promptIntern = employeeData => {
    return inquirer.prompt([
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
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
        .then((internData) => {
            console.log(employeeData)
            console.log(internData)
            employeeData['school'] = internData.school
            employeeData['confirmAddEmployee'] = internData.confirmAddEmployee
            console.log(employeeData)
            console.log(teamData)
            teamData.push(employeeData);
            console.log(teamData)
        })
        .then(internData => {
            if (employeeData.confirmAddEmployee) {
                return promptStart(teamData);
            } else {
                return teamData;
            }
        })
}

const promptStart = () => {

    return inquirer.prompt([
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
    ])
        .then((employeeData) => {
            //     console.log(employeeData)
            if (employeeData.role === 'Manager') {
                promptManager(employeeData)
                
            }
            if (employeeData.role === 'Engineer') {
                promptEngineer(employeeData)
            }
            if (employeeData.role === 'Intern') {
                promptIntern(employeeData)
            }
            else {
                return
            }
        })
}

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

function init(){
    promptStart()
    .then(teamData => {
        return generateHTML(teamData)
    })
    .then(generatedHTML => {
        console.log(generatedHTML)
        writeToFileHTML(generatedHTML);
        writeToFileCSS()
        console.log('Your team webpage is ready to view!')
    })
}

// init()

// above this line works but doesn't use lib of class objects created already

function teamPage (){
    this.teamData = [];
}
teamPage.prototype.initializeTeam = function(){
    inquirer.prompt([
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
    ])
        .then((employeeData) => {
            //     console.log(employeeData)
            if (employeeData.role === 'Manager') {
                promptManager(employeeData) 
                .then(({employeeData})=>{
                    this.teamData.push(new Manager(employeeData.name,employeeData.id,employeeData.email,employeeData.officeNumber))
                    // this.name = employeeData.name
                    // this.id = employeeData.id
                    // this.email = employeeData.email
                    // this.officeNumber=employeeData.officeNumber
            })
        }
            if (employeeData.role === 'Engineer') {
                promptEngineer(employeeData)
                .then(({employeeData})=>{
                    this.teamData.push(new Engineer(employeeData.name,employeeData.id,employeeData.email,employeeData.Github))
                    // this.name = employeeData.name
                    // this.id = employeeData.id
                    // this.email = employeeData.email
                    // this.Github=employeeData.Github
            })
        }
            if (employeeData.role === 'Intern') {
                promptIntern(employeeData)                
                .then(({employeeData})=>{
                    this.teamData.push(new Intern(employeeData.name,employeeData.id,employeeData.email,employeeData.school))
                    // this.name = employeeData.name
                    // this.id = employeeData.id
                    // this.email = employeeData.email
                    // this.school=employeeData.school
            })
            }
            else {
                return
            }
        })
}
new teamPage.initializeTeam();