// import Engineer from './lib/Engineer';
// import Manager from './lib/Manager';
// import Intern from './lib/Intern';

const inquirer = require("inquirer");

// const promptStart = ()=>{

// }

const promptTeam = teamData => {

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
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
          }

    ])
    .then((employeeData) =>{
        console.log(employeeData)
    if(employeeData.role === 'Manager'){
        promptManager(employeeData)
    }
    if(employeeData.role === 'Engineer'){
        promptEngineer(employeeData)
    }
    if(employeeData.role === 'Intern'){
        promptIntern(employeeData)
    }
    else {
        return
    }
})
    // .then(employeeData => {
    //     teamData.push(employeeData);
    //     if (employeeData.confirmAddEmployee) {
    //       return promptProject(teamData);
    //     } else {
    //       return teamData;
    //     }
    //   })
}


promptTeam()