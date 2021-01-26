const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getName() {
		return this.name;
	}

	getRole() {
		return "Intern";
	}

	getSchool() {
		return this.school;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}
}

module.exports = Intern;
