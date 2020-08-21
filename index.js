const express = require('express');
const mysql = require('mysql');
const port = process.env.PORT || 3001;

//creating the connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

// connect to MySQL

db.connect(err => {
    if (err){
        throw err;
    }
    console.log("MySQL Connected");
});

const app = express();

// create database
app.get('/createdb', (req, res) =>{
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, err => {
        if (err){
            throw err;
        }
        res.send("Database Created");
    });
});

