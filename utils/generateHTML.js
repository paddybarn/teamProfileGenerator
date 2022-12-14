const generateHTML = function(team) {
    console.log(team[0].name)
    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="./assets/css/style.css"/>
            <title>Team</title>
        </head>
        <body>

    <header class="jumbotron jumbotron-fluid bg-primary text-white">
          <h1 class="d-flex justify-content-center">My Team</h1>
        </div>
    </header>

        <main>
            <div class= "team container">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${team[0].name}</h5>
            <p>${team[0].title}</P>
            <p>${team[0].id}</P>
            <p>${team[0].email}</P>
            <p>${team[0].officeNumber}</P>
            </div>
        </main>
        <main>
            <div class= "team container">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Name:  ${team[1].name}</h5>
            <p>Title:  ${team[1].title}</P>
            <p>ID:  ${team[1].id}</P>
            <p>Email:  ${team[1].email}</P>
            <p>Github:  ${team[1].Github}</P>
            </div>
        </main>
        <main>
            <div class= "team container">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Name:  ${team[2].name}</h5>
            <p>Title:  ${team[2].title}</P>
            <p>ID:  ${team[2].id}</P>
            <p>Email:  ${team[2].email}</P>
            <p>School:  ${team[2].school}</P>
            </div>
        </main>

    <script src="./assets/js/script.js"></script>
</body>
</html>
        `
    )}

module.exports = generateHTML