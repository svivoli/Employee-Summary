const manager = require('./manager');
const fs = require('fs');

const generateHTML = (managerArray, engineerCards, internCards) => {

return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <style>
        header {
            padding: 50px;
            margin-bottom: 50px;
            text-align: center;
        }

        .card {
            width: 400px;
            margin: 0 auto;
            margin-bottom: 30px;
            float: none;
        }

        ul {
            margin-top: 10px;
            list-style: none;
        }

        .list-item {
            padding: 10px;
            background: white;
            border: solid 1px lightgrey;
            border-bottom: none;
            width: 80%;
        }

        .list-item:last-of-type {
            border-bottom: solid 1px lightgray;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        .list-item:first-of-type {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    </style>
</head>

<body>
    <header class="bg-danger text-white">
        <h1>My Team</h1>
    </header>

        <div class="wrapper">
            <div class="content">
                <div class="row row-col-md-4">
                    <div class="card shadow-lg">
                        <div class="card-header text-white bg-primary">
                            <h3>${managerArray[0].name}</h3>
                            <h4><i class="fas fa-mug-hot"></i> ${managerArray[0].getRole()}</h4>
                        </div>
                        <div class="card-body text-black bg-light">
                            <ul>
                                <li class="list-item">ID: ${managerArray[0].id}</li>
                                <li class="list-item">Email: <a href="mailto:${managerArray[0].email}" target="_blank">${managerArray[0].email}</a></li>
                                <li class="list-item">Office Number: ${managerArray[0].officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                    ${internCards}
                    ${engineerCards}
                </div>
            </div>
        </div>

</body>

</html>`
}

module.exports = generateHTML;