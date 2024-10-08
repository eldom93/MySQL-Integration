const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_database'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

const user = { name: 'John Doe', email: 'john@example.com' };
const query = 'INSERT INTO users SET ?';

connection.query(query, user, (err, result) => {
    if (err) throw err;
    console.log('User inserted with ID:', result.insertId);
});

connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log(results);
});

connection.end();
