require('dotenv').config();

var Sequelize = require('sequelize');
const db = new Sequelize(
    database = process.env.DB_NAME,
    username = process.env.DB_USER,
    password = process.env.DB_PASS,{
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle:10000
        }
    }
);

db.authenticate().then(function(){
    console.log('Koneksi ke db telah berhasil');
})

module.exports = db;