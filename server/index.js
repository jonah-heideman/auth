const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const port = process.env.PORT || 3090;
const server = http.createServer(app);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:auth/auth');

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

router(app);

server.listen(port);
console.log('Creepin on u on port:', port);