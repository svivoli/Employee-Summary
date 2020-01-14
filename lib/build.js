const generateHTML = require('./generateHTML');
const fs = require('fs');

const build = (managerArray, engineerArray, internArray) => {
    const engineerCards = internArray.map(employee => {
        return `<div class="card shadow-lg">
        <div class="card-header text-white bg-primary">
            <h3>${employee.name}</h3>
            <h4><i class="fas fa-glasses"></i> ${employee.getRole()}</h4>
        </div>
        <div class="card-body text-black bg-light">
            <ul>
                <li class="list-item">ID: ${employee.id}</li>
                <li class="list-item">Email: <a href="mailto:${employee.email}" target="_blank">${employee.email}</a>
                </li>
                <li class="list-item">GitHub: <a href="https://github.com/${
            employee.github}" target="_blank">https://github.com/${
            employee.github}</a></li>
            </ul>
        </div>
    </div>`
    })
    const internCards = engineerArray.map(employee => {
        return `<div class="card shadow-lg">
        <div class="card-header text-white bg-primary">
            <h3>${employee.name}</h3>
            <h4><i class="fas fa-glasses"></i> ${employee.getRole()}</h4>
        </div>
        <div class="card-body text-black bg-light">
            <ul>
                <li class="list-item">ID: ${employee.id}</li>
                <li class="list-item">Email: <a href="mailto:${employee.email}" target="_blank">${employee.email}</a>
                </li>
                <li class="list-item">School: ${employee.school}</li>
            </ul>
        </div>
    </div>`
    })

    const html = generateHTML(managerArray, internCards, engineerCards);

    fs.writeFile("./output/Team.html", html, function (err) {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Your team page has been created in ./output/Team.html.")
        }
    });
}

module.exports = build;