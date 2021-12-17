const express = require('express');
const Route = express.Router();
const mysql = require('mysql');
const {v4:uuidv4} = require('uuid')


const get_conn = () => {
    conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'file_system',
    });
    return conn;
}
Route.get('/', (req, res) => {
    res.render('index')
});

Route.get('/home', (req, res) => {
    let data = []
    let conn = get_conn();
    conn.connect();
    conn.query('SELECT * from data', (err, rows, fields) => {
        rows.forEach(r => {
            data.push({
                id: r.id,
                name: r.name_file,
            })
        });
    })
    conn.end();
    setTimeout(()=>{
        res.render('home', {data})
    }, 600)
});

Route.get('/download/:id', (req, res) => {
    let id = req.params.id;
    let data;
    let conn = get_conn();
    conn.connect();
    conn.query('SELECT * FROM data WHERE `id` = ?', [id], (err, rows, fields) => {
        data = {
            name: rows[0].name_file,
            file: rows[0].file,
            type: rows[0].type,
            size: rows[0].size
        };
    })
    conn.end();
    setTimeout(()=>{
        res.render('download', {data})
    }, 800)
});

Route.get('/json/:id', (req, res)=>{
    let id = req.params.id;
    let data;
    let conn = get_conn();
    conn.connect();
    conn.query('SELECT * FROM data WHERE `id` = ?', [id], (err, rows, fields) => {
        data = {
            name: rows[0].name_file,
            file: rows[0].file,
            type: rows[0].type,
            size: rows[0].size
        };
    })
    conn.end();
    setTimeout(()=>{
        res.json(data)
    }, 800)
});

Route.post('/upload', (req, res) => {
    let data = {
        id: uuidv4(),
        name_file: req.body.name,
        base64: req.body.file,
        type: req.body.type,
        size: req.body.size,
    };
    let conn = get_conn();
    conn.connect();
    conn.query('INSERT INTO data SET ?', data, (err, rows, fields) => {
        let rr = err
        console.log(rr)
    })
    res.send()
    conn.end();
});

module.exports = Route;