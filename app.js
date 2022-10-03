
require('dotenv').config();
const express = require('express');
const http = require('http');


const connectDB = require('./config/database');
const configExpress = require('./config/express');
const configGraphql = require('./config/graphql');

const app = express();
const server = http.Server(app);

connectDB();
configExpress(app);
configGraphql(app);


module.exports = { app, server };