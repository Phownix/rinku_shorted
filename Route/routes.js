const express = require('express');
const Route = express.Router();
const {v4:uuidv4} = require('uuid')

Route.get('/', (req, res) => {
    try{
        res.render('index')
    }catch (err){
        console.error(err);
        return res.status(500).send('Server Error')
    }
});

module.exports = Route;