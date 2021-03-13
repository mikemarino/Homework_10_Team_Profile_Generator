const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //used to access and call functions on an object's parent.
        super(name, id, email);
        this.school = school;

    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;