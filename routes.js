const express = require('express');
const Route = express.Router();
const {v4:uuidv4} = require('uuid')

Route.get('/', (req, res) => {
    res.render('index')
});

module.exports = Route;