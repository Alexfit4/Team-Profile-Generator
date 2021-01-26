const { getMaxListeners } = require("process");
const { CLIENT_RENEG_LIMIT } = require("tls");

class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}

	getName() {
		this.name
	}

	getEmail() {
        this.email

    }
}

const name = new Employee("amir", 4, "amir@gmail.com")
console.log(name);
name.getName()


module.exports = Employee
