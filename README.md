# MySQL-Integration
# CREATE DATABASE my_database;
# USE my_database;

<!-- CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

npm install mysql

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

// Example: Insert a new user
const user = { name: 'John Doe', email: 'john@example.com' };
const query = 'INSERT INTO users SET ?';

connection.query(query, user, (err, result) => {
    if (err) throw err;
    console.log('User inserted with ID:', result.insertId);
});

// Example: Fetch all users
connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log(results);
});

connection.end();

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'my_database');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

<?php
/*
Plugin Name: Custom Plugin
Description: A custom plugin to interact with the MySQL database.
Version: 1.0
Author: Your Name
*/

function fetch_users() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'users'; // Using the same table name as the Node.js example
    $results = $wpdb->get_results("SELECT * FROM $table_name");

    foreach ($results as $row) {
        echo 'ID: ' . $row->id . ' Name: ' . $row->name . ' Email: ' . $row->email . '<br>';
    }
}

add_shortcode('show_users', 'fetch_users');

eb init -p node.js my-node-app
eb create my-node-env 
 -->