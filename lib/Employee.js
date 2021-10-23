const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
}




module.exports = Employee;


const questions = [{
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
    message: 'What needs to be installed ?',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('You need to enter your email!');
            return false;
        }
    }
}
];