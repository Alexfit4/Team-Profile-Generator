const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officenumber) {
		super(name, id, email);
		this.officenumber = officenumber;
    }
    
    getRole(){
        return 'Manager'
    }

    getOfficeNumber(){
        return this.officenumber
    }
}

const office = new Manager("Johnnie", 5, "j@gmail.com", 7036448854)
console.log(office);


module.exports = Manager
