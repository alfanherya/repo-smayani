const Sequelize = require('sequelize');
const db = require('../config/db.config.js');

var dataguru = db.define('data_pendidik', {
    nama: Sequelize.STRING,
    alamat: Sequelize.STRING,
    no_hp: Sequelize.STRING,
    jabatan: Sequelize.STRING,
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = dataguru;