const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //used to access and call functions on an object's parent.
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getRole() {
        return 'Manager';
    }

    getOffice() {
        return this.officeNumber;
    }

}

module.exports = Manager;

