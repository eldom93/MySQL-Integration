<?php
/*
Plugin Name: Custom Plugin
Description: A custom plugin to interact with the MySQL database.
Version: 1.0
Author: Your Name
*/

function fetch_users() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'users';
    $results = $wpdb->get_results("SELECT * FROM $table_name");

    foreach ($results as $row) {
        echo 'ID: ' . $row->id . ' Name: ' . $row->name . ' Email: ' . $row->email . '<br>';
    }
}

add_shortcode('show_users', 'fetch_users');
