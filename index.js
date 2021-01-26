 
	// * Imported required packages
	const fs = require("fs");
	const inquirer = require("inquirer");

	//* Array of questions for user input
	const questions = [
		{
			type: "input",
			name: "name",
			message: "Enter team member's name",
		},
		// {
		// 	type: "list",
		// 	name: "role",
		// 	message: "Select team member's role",
		// 	choices: ["Manager", "Engineer", "Intern"],
		// },
		// {
		// 	type: "input",
		// 	name: "ID",
		// 	message: "Enter team member's id",
		// },
		// {
		// 	type: "input",
		// 	name: "email",
		// 	message: "Enter team member's email",
		// 	validate: async function (input) {
		// 		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		// 		if (!re.test(input)) {
		// 			return "Input a valid email";
		// 		}
		// 		return true;
		// 	},
		// },
		// {
		// 	type: "input",
		// 	name: "officeNumber",
		// 	message: "Enter team member's office number",
		// },
		// {
		// 	type: "list",
		// 	name: "addMore",
		// 	message: "Would you like to add more team members?",
		// 	choices: ["Yes please", "No I'm all done"],
		// },
	];

	// * Convert to README file

	let answers = inquirer.prompt(questions);

	answers.then((answer) => {
		let data = generate(answer);
		fs.writeFileSync("index.html", data);
	});

	// * Ask prompts of questions


