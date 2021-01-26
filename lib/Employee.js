

class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}

	getName() {
		this.name
	}

	getId(){
		return this.id
	}

	getEmail() {
        this.email

    }
}

const name = new Employee("amir", 4, "amir@gmail.com")
console.log(name);
name.getName()


module.exports = Employee
