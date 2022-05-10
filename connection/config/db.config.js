require('dotenv').config();

const res = require('express/lib/response');
var Sequelize = require('sequelize');
const db = new Sequelize(
    database = process.env.DB_NAME,
    username = process.env.DB_USER,
    password = process.env.DB_PASS,{
        dialect: 'mysql',
        host: process.env.DB_HOST,
        pool: {
            max: 5,
            min: 0,
            idle:10000
        }
    }
);

db.authenticate().then(function(){
    console.log('Connected to database');
})

module.exports = db;