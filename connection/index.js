var express = require('express');
var app = express();
var db = require('./config/db.config');
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 // env
var port = process.env.DB_PORT || 3000;

db.authenticate().then(() =>
    console.log('Koneksi berhasil'));

// routes
app.get('/connection', function(req, res){
    res.send('Hello world, ini expressJS berjalan di port : ' + port);
});

// listen
app.listen(port);
console.log('Server berjalan di port ' + port);