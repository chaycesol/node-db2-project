const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger());

// Router
server.use('/api/cars', carsRouter)

// API Test
server.get('/', (req, res) => {
    res.status(200).json({message: 'w14d2 project up and running'});
})

function logger(req, res, next) {
    return function (req, res, next) {
      console.log(`a ${req.method} request was made to ${req.url} at ${new Date()}`);
      next();
    }
  }

module.exports = server;