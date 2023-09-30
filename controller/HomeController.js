import { shortModel } from "../model/short_model.js";
import { RandomURL } from "./../utils/random_url.js"

export class HomeController {
    static async index (req, res, next) {
        try{
            let body = {}

            if(req.query){
                if(req.query.location && req.query.path){
                    let location = new URL(req.query.location);
                    body.url = {
                        path: req.query.path,
                        origin: req.headers.host,
                        protocol: location.protocol,
                        new_link: req.protocol+"://"+req.headers.host+'/'+req.query.path
                    }
                }
            }

            res.render('index',{
                ...body
            });
        } catch (err){
            return next(err);
        }
    }

    static async shortener (req, res, next) {
        try {
            let body = {...req.body};
            let date_at = new Date();
            let date_to = new Date(new Date().setDate(date_at.getDate() + parseInt(body.limit_to)));

            body.user_id = null;
            body.create_at = date_at;
            body.limit_to = date_to;

            if (!body.pathname){
                body.pathname = RandomURL()
            }

            await shortModel.appendShort({body});
            
            res.redirect("/?path="+body.pathname+"&location="+body.location);
        } catch (err) {
            next(err);
        }
    }

    static async index_id (req, res, next){
        try {
            let {url} = req.params;
            const short = await shortModel.findById(url)
            res.redirect(short.location)
        } catch (err) {
            next(err);
        }
    }
}