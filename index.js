// * Imported required packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMember = [];
const idArray = [];

//* Array of questions for user input
function appMenu() {
	function createManager() {
		console.log("Please build your team");
		inquirer.prompt(questions);
	}
}
const questions = [
	{
		type: "input",
		name: "managerName",
		message: "Enter team manager's name?",
	},
];

// * Convert to README file

let answers = inquirer.prompt(questions);

answers.then((answer) => {
	const manager = new Manager(
		answers.managerName,
		answers.managerId,
		answers.managerEmail,
		answers.managerOfficeNumber
	);
	teamMember.push(manager);
	idArray.push(answers.managerId);
	createTeam();
	fs.writeFileSync("index.html", data);
});

function createTeam() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "memberChoice",
				message: "Which type of team member would you like to add?",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add anymore team members",
				],
			},
		])
		.then((userChoice) => {
			switch (userChoice.memberChoice) {
				case "Engineer":
					addEngineer();
					break;
				case "Intern":
					adIntern();
					break;
				default:
					buildTeam();
			}
		});
}

// * Ask prompts of questions
