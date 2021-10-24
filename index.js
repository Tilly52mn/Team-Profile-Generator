// import Engineer from './lib/Engineer';
// import Manager from './lib/Manager';
// import Intern from './lib/Intern';
var teamData = [];
const inquirer = require("inquirer");

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
        .then(employeeData => {
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
            employeeData['confirmAddEmployee'] = managerData.confirmAddEmployee
            console.log(employeeData)
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
            employeeData['confirmAddEmployee'] = managerData.confirmAddEmployee
            console.log(employeeData)
        })
        .then(employeeData => {
            if (employeeData.confirmAddEmployee) {
                return promptStart(teamData);
            } else {
                return teamData;
            }
        })
}

const promptStart = () => {

    // if (!teamData) {
    //     teamData = [];
    // }
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


promptStart()