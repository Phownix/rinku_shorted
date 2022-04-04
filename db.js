const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./var/db/url.db')

db.serialize(() => {
    // db.run('drop table path')
    db.run("CREATE TABLE IF NOT EXISTS path (\
        pathname TEXT NOT NULL,\
        location TEXT NULL,\
        user_id TEXT NULL,\
        create_at DATE NULL,\
        limit_to DATE NULL,\
        PRIMARY KEY (pathname)\
    )");

    db.run("INSERT OR IGNORE INTO path (`pathname`, `location`, `create_at`) VALUES (?, ?, ?)", ['info', 'https://google.com', '2022-04-04']);
})

module.exports = db