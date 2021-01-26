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

function createManager() {
	console.log("Please build your team");
	inquirer
		.prompt([
			{
				type: "input",
				name: "managerName",
				message: "Enter team manager's name?",
				validate: async function (input) {
					if (input.length === 0) {
						return "Please input your name.";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "managerEmail",
				message: "What is your manager's email?",
				validate: async function (input) {
					console.log(input);
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (!re.test(input)) {
						return "Input a valid email";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "managerOfficeNumber",
				message: "What is your manager's office number?",
			},
			{
				type: "input",
				name: "managerId",
				message: "What is your manager's id?",
			},
		])
		.then((answers) => {
			const manager = new Manager(
				answers.managerName,
				answers.managerId,
				answers.managerEmail,
				answers.managerOfficeNumber
			);
			teamMember.push(manager);
			idArray.push(answers.managerId);
			createTeam();
		});
}

function addIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "internName",
				message: "What is your intern's name?",
				validate: async function (input) {
					if (input.length === 0) {
						return "Please input your name.";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "internId",
				message: "What is your intern's id?",
			},
			{
				type: "input",
				name: "internSchool",
				message: "What school is your intern attending?",
				validate: async function (input) {
					if (input.length === 0) {
						return "Input your Github username";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "internEmail",
				message: "What is your intern's email?",
				validate: async function (input) {
					console.log(input);
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (!re.test(input)) {
						return "Input a valid email";
					}
					return true;
				},
			},
		])
		.then((answers) => {
			const intern = new Intern(
				answers.internName,
				answers.internId,
				answers.internEmail,
				answers.internSchool
			);
			teamMember.push(intern);
			idArray.push(answers.internId);
			createTeam();
		});
}

function addEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "engineerName",
				message: "What is your engineer's name?",
				validate: async function (input) {
					if (input.length === 0) {
						return "Please input your name.";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "engineerId",
				message: "What is your engineer's ID number?",
			},
			{
				type: "input",
				name: "github",
				message: "What is your engineer's github?",
				validate: async function (input) {
					if (input.length === 0) {
						return "Input your Github username";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "engineerEmail",
				message: "What is your engineer's email?",
				validate: async function (input) {
					console.log(input);
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (!re.test(input)) {
						return "Input a valid email";
					}
					return true;
				},
			},
		])
		.then((answers) => {
			const engineer = new Engineer(
				answers.engineerName,
				answers.engineerId,
				answers.engineerEmail,
				answers.github
			);
			teamMember.push(engineer);
			idArray.push(answers.engineerId);
			createTeam();
		});
}

function buildTeam() {
	// * Create the output directory if the output path doesn't exist
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR);
	}

	fs.writeFileSync(outputPath, render(teamMember), "utf-8");

	// createManager();
}

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
					addIntern();
					break;
				default:
					buildTeam();
			}
		});
}

createManager();
