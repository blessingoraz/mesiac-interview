require('dotenv').config();

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const app = express();

const graphqlHTTP = require('express-graphql')
const Schema = require('../schema');

// Instatiate the server module object
let server = {};

// Instatiate Http server
server.httpServer = http.createServer(app);

// Instatiate Https server
server.httpsServerOptions = {
    'key': fs.readFileSync(path.join(__dirname, '/../https/key.pem')), //You want to use async since the file is read asynchronously
    'cert': fs.readFileSync(path.join(__dirname, '/../https/cert.pem'))
};

server.httpsServer = https.createServer(server.httpsServerOptions, app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
})) // middleware for graphql to interact with rest endpoint

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Mesiac coding challenge API' })
});

// Init script
server.init = () => {
    //Start the HTTP server
    server.httpServer.listen(config.httpPort, () => {
        console.log('\x1b[36m%s\x1b[0m', `Listening on port ${config.httpPort} `);
    });

    //Start the HTTPS server
    server.httpsServer.listen(config.httpsPort, () => {
        console.log('\x1b[35m%s\x1b[0m', `Listening on port ${config.httpsPort} `);
    });
}
// Export the server
module.exports = server;