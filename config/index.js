require('dotenv').config();
const express = require('express');

const ParseServer = require('parse-server').ParseServer;
const loadRoutes = require('../loaders/routeLoader');
const errorHandler = require("../middlewares/errorHandler");
const responseWrapper = require("../middlewares/responseWrapper");
const sessionChecker = require("../middlewares/sessionChecker");
const forumPostController = require("../controllers/api/forumPost.controller");

async function startServer() {
    const app = express();

    const server = new ParseServer({
        databaseURI: process.env.DATABASE_URI,
        cloud: './cloud/main.js',
        appId: process.env.APP_ID,
        masterKey: process.env.MASTER_KEY,
        serverURL: process.env.SERVER_URL
    });

    // Set body parser
    app.use(express.json())
    app.use(responseWrapper);

    // Serve the Parse API on the /parse URL prefix
    app.use('/parse', server);
    app.use('/api', sessionChecker)

    // Load and mount all the routes
    loadRoutes(app);

    app.use(errorHandler);

    // Listen
    app.listen(process.env.PORT, function () {
        console.log('parse-server running on port 1337.');
    });
}

startServer().then(() => {
    console.log('Started Parse Server.');
}).catch((error) => {
    console.error('Error starting Parse Server:', error);
});