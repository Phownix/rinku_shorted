const express = require('express');
const app = express();
const Route = require('./Route/routes.js')

const PORT = process.env.PORT || 8080;


app.set('view engine', 'ejs')
app.use(express.json());

app.use('/', express.static('public'))

app.use('/', Route)


app.listen(PORT, () => console.log(`Server is runing in port ${PORT}`));