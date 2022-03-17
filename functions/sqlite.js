const db = require('../db')

const short_url = async (path, url, user=null) => {
    db.run('INSERT INTO path (`pathname`, `location`, `user_id`) VALUES (?, ?, ?)', [path, url, user], (err) => {
        if (err) { return err; }
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