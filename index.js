import bodyParser from "body-parser";
import express, { json } from "express";
import nunjucks from "nunjucks";
import { Home } from "./Route/Home.js"

const app = express();
const PORT = process.env.PORT || 8080;

nunjucks.configure(["views/"], {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true}));
app.use(json());
app.use('/', express.static('public'));

app.use('/', Home);

app.listen(PORT, () => console.log(`Server is runing in port ${PORT}`));