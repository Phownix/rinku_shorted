const db = require('../db')

const short_url = async (path, url, user=null, date, date_to) => {
    db.run('INSERT INTO path (`pathname`, `location`, `user_id`, `create_at`, `limit_to`) VALUES (?, ?, ?, ?, ?)', [path, url, user, date, date_to], (err) => {
        if (err) { console.log(err); }
        console.log({path: path, url:url, user:user, date:date, date_to:date_to})
    })
}

const get_url = (path) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM `path` WHERE pathname = ?', [path], (err, row) => {
            if (err) { reject(err) }
            resolve(row)
        })
    })
}


module.exports = {
    short_url,
    get_url
}