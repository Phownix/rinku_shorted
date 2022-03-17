const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./var/db/url.db')

db.serialize(() => {
    // db.run('drop table path')
    db.run("CREATE TABLE IF NOT EXISTS path (\
        pathname TEXT UNIQUE NOT NULL,\
        location TEXT UNIQUE NOT NULL,\
        user_id TEXT UNIQUE NULL,\
        create_at DATE NULL,\
        PRIMARY KEY (pathname)\
    )");

    db.run("INSERT OR IGNORE INTO path (`pathname`, `location`) VALUES (?, ?)", ['lol', 'https://google.com']);
    db.run("INSERT OR IGNORE INTO path (`pathname`, `location`) VALUES (?, ?)", ['lolaa', 'htatps://google.com']);
})

module.exports = db