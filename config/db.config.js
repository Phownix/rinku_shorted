const get_conn = () => {
  conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'file_system',
  });
  return conn;
}