const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email)
        this.Github = Github
        this.role = "Engineer"
    }

    getRole() {
        return `${this.role}`
      }

      getGithub() {
          return `${this.Github}`
        }
    }

module.exports = Engineer;