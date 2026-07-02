// MySQL Connections
const mysql = require('mysql2');
const express = require('express');


const connections = mysql.createConnection({
    host: "localhost",
    user: "root",
    passwor: "123",
    database: "flutter_db",

});

connections.connect((message) => {
        if(message) {
            console.log(message);
        }else{
            console.log("MySQL Connected...!");
        }
});


module.exports = connections;
