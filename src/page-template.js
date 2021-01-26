// * Create the team
const generateTeam = (team) => {
	// * create the manager html
	const generateManager = (manager) => {
		return `
        <div class ="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}></a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>            
            </ul>
        </div>
        </div>
        `;
	};

	// * create the html for engineer
	const generatEngineer = (engineer) => {
		return `
		<div class="card employee-card">
		<div class="card-header">
			<h2 class="card-title">${engineer.getName()}</h2>
			<h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
		</div>
		<div class="card-body">
			<ul class="list-group">
				<li class="list-group-item">ID: ${engineer.getId()}</li>
				<li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
				<li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
			</ul>
		</div>
	</div>
	
    `;
	};

	// * create the html for intern
	const generateIntern = (intern) => {
		return `
    <div class ="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}></a></li>
            <li class="list-group-item"> School: ${intern.getSchool()}</li>            
        </ul>
    </div>
    </div>
    `;
	};

	const html = [];

	html.push(
		team
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => generateManager(manager))
	);

	html.push(
		team
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => generatEngineer(engineer))
	);

	html.push(
		team
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => generateIntern(intern))
	);

	return html.join("");
};

module.exports = (team) => {
	return `
    <!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
			crossorigin="anonymous"
		/>

		<link rel="stylesheet" href="style.css" />
		<script
			src="https://use.fontawesome.com/releases/v5.15.2/js/all.js"
			data-auto-a11y="true"
		></script>

		<title>Document</title>

		<div class="container-fluid">
			<div class="row">
				<div class="col-12 jumbostron mb-3 team-heading">
					<h1 class="text-center">My Team</h1>
				</div>
			</div>
		</div>
		  <div class="container">
			  <div class="row">
				  <div class="team-area col-12 d-flex justify-content-center">${generateTeam(
						team
					)}

				  </div>
			  </div>
		  </div>
	</head>
	<body></body>
</html>

    `;
};
