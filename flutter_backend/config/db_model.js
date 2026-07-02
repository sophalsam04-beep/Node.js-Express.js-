// MySQL connect with Model

const express = require('express');
const cors = require('cors');
const db = require('mysql2');
const mysql = require('/self_learn18/flutter_backend/node_modules/src/config/db.js');


const findAll = (callback)=> {
    db.query(
        "SELECT * FROM products",
    );
};

module.exports = {
    findAll,
};
