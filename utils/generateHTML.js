module.exports = generateHTML
function generateHTML(teamData) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

    <link rel="stylesheet" href="style.css" />
    <title>My Team</title>
</head>

<body>
    <header class="jumbotron">
        <div class="container page-header">
            <h1>My Team</h1>
        </div>
    </header>
    <div class="container row mx-auto">
${generateTeamMembers(teamData)}
    </div>
</body>

</html>
`
}
const generateTeamMembers = teamArr => {
    return `
    ${teamArr.filter(team => team.role === "Manager").map(({ name, id, email, role, officeNumber, confirmAddEmployee }) => {
        return `        <div class=" col-3 mx-auto">
        <div class="card external-card mr-1 mb-3 shadow">
            <div class="card-header blue-background">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="card-header">
                        <p class="card-text">ID :1</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Email: <a class="link"
                                href="mailto:${email}">${email}</a></p>
                        <p class="card-text">Office number: ${officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    })
            .join('')}
    ${teamArr.filter(team => team.role === "Engineer").map(({ name, id, email, role, Github, confirmAddEmployee }) => {
                return `                
    <div class=" col-3 mx-auto">
        <div class="card external-card mr-1 mb-3 shadow">
            <div class="card-header blue-background">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="card-header">
                        <p class="card-text">ID :1</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Email: <a class="link"
                            href="mailto:${email}">${email}</a></p>
                        <p class="card-text">Github:<a class="link" href="github.com/${Github}">${Github}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
            })
            .join('')}
    ${teamArr.filter(team => team.role === "Intern").map(({ name, id, email, role, School, confirmAddEmployee }) => {
                return `        <div class=" col-3 mx-auto">
        <div class="card external-card mr-1 mb-3 shadow">
            <div class="card-header blue-background">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="card-header">
                        <p class="card-text">ID :1</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Email: <a class="link"
                                href="mailto:${email}">${email}</a></p>
                        <p class="card-text">School: ${School}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
            })
            .join('')}
`
}