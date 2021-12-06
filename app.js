const express = require('express');
const Route = require('./routes.js')
const app = express();
const port = 3300;


app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('public'))
app.use('/', Route)

app.listen(port)