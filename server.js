'use strict';

const express = require('express');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/new', (req, res) => {
  res.send('Hello Docker Swarm - COMPASSO - LL 2018 05\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
