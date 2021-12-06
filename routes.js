const express = require('express');
const Route = express.Router();
const mysql = require('mysql');

let data = []

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: '_music',
});

conn.query('SELECT * from song_data', (err, rows, fields) => {
    rows.forEach(e => {
        data.push(e.title)
    });
});

Route.get('/', (req, res) => {
    res.render('index')
});
Route.get('/home', (req, res) => {
    res.render('home', {data})
});

conn.end();

module.exports = Route;