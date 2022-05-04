'use strict';

const hostName = '127.0.0.1';
const port = 3000;

const express = require('express'),
es6Renderer = require('express-es6-template-engine');

const app = express();

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`)
});

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');


app.use('/rangers', rangersController);