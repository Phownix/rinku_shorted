const express = require('express');
const Route = express.Router();

const path = require('./../functions/random_url');
const sql = require('../functions/sqlite')


Route.get('/', (req, res) => {
    try{
        let url_params
        if (req.query.u) {
            let URL_LINK = new URL(req.query.u)
            let new_path = path(Math.floor((Math.random() + 1) * 5))
            
            let add_url = sql.short_url(new_path, URL_LINK.href, null)

            url_params = {
                path : new_path,
                origin : req.headers.host,
                new_link : req.protocol+"://"+req.headers.host+'/'+new_path,
                protocol : URL_LINK.protocol
            }
        }

        res.render('index', {
            url : url_params,
            input : req.query.u
        })
    } catch (err){
        console.error(err);
        return res.status(500).send('Server Error')
    }
});

Route.get('/:url', (req, res) => {
    try{
        let row = sql.get_url(req.params.url)
            .then(result => {
                if(result){ res.redirect(result.location) }
                else{ return res.status(404).render('error', { type: 404}) }
            })
    }catch (err) {
        console.error(err);
        return res.status(500).send('Server Error')
    }
})

module.exports = Route;