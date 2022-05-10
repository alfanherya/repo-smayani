const Sequelize = require('sequelize');
const model = require('../models/index');
const Model = require('../models/index');
const controller = {};

controller.getdataguru = async function(req, res){
    const no_hp = req.body.no_hp;
    const jabatan = req.body.jabatan;
    try {
        const finddata = await Model.cekdataguru.findAll({
            where: {
                no_hp: no_hp,
                jabatan: jabatan
            }
        });
        if (finddata.length > 0) {
            res.status(200).json({
                message: 'Data guru berhasil ditampilkan',
                data: finddata
            })
        } else {
            res.status(404).json({
                message: 'Data guru tidak ditemukan',
                data: []
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        })
    }

}

module.exports = controller;