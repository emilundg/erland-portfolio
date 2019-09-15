const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
// create the express app
const app = express()
// var sslRedirect = require('heroku-ssl-redirect');

var apiRouter = express.Router()

// Serve static assets
app.use("/static", serveStatic(path.join(__dirname, '/static')));
// app.use(sslRedirect());

apiRouter.get('/postmaster/:name/:email/:message', (req, res, next) => {
    var apiKey = '0f19e0a94a47c5f5f2f10e420143db25-c27bf672-707ab9a2'
    var domain = 'sandboxf223c828143c4c40babce9350152428b.mailgun.org'
    var mailgun = require('mailgun-js')({
        apiKey: apiKey,
        domain: domain
    })

    var data = {
        from: 'Excited Customer <postmaster@sandboxf223c828143c4c40babce9350152428b.mailgun.org>',
        to: 'erlandd6@gmail.com',
        subject: 'from customer: ' + req.params.name + ' with email: ' + req.params.email,
        text: req.params.message
    }

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }
    })
    res.status(200);
    res.send('Gj m8');
})

// create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, '/dist')))
// Add API api-router.
app.use('/api', apiRouter)

// Catch all routes and redirect to the index file
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)