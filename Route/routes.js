const express = require('express');
const Route = express.Router();
const connection = require('./../config/connection');
const path = require('./../functions/random_url');

Route.get('/', async (req, res) => {
    try{
        let conn =  await connection
        let url_params

        if (req.query.u) {
            let URL_LINK = new URL(req.query.u)
            let new_path = path(Math.floor((Math.random() + 1) * 5))

            let resp = await conn.query('INSERT INTO path (`_id`, `url_to`) VALUES (?, ?)', [new_path, URL_LINK.href]);

            url_params = {
                path : new_path,
                origin : req.headers.host,
                new_link : req.protocol+"://"+req.headers.host+'/'+new_path,
                href : URL_LINK.href,
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

Route.get('/:url', async (req, res) => {
    try{
        let conn = await connection
        let resp = await conn.query(`select * from path where _id = '${req.params.url}'`);
        if(resp[0] != undefined){
            res.redirect(resp[0].url_to)
        }else{
            return res.status(404).render('error', {
                type: 404
            })
        }
    }catch (err) {
        console.error(err);
        return res.status(500).send('Server Error')
    }
})

module.exports = Route;