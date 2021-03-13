const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //used to access and call functions on an object's parent.
        super(name, id, email);
        this.github = github;

    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;