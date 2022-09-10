const generateHTML = function({team}) {
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
            <h5 class="card-title">${team}</h5>
            </div>
        </main>

    <script src="./assets/js/script.js"></script>
</body>
</html>
        `
    )}

module.exports = generateHTML