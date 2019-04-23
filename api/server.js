require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const loginRoute = require('./login/loginRoute');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan());

server.use('/api/login', loginRoute);

module.exports = server;
