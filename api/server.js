const express = require('express');
const helmet = require('helmet');
const server = express();
const cors = require('cors');
const recipesRouter = require('./recipes/recipesRouter');


server.use(helmet());
server.use(cors());
server.use(express.json());
server.get('/', (req, res) => {
    res.send('The API is live.')
});

server.use('/api/recipes', recipesRouter);
server.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found'})
});

module.exports = server;