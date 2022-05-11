const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');
const cekdatagururoutes = require('./routes/routes.cekdataguru');
// const swaggerUi = require('swagger-ui-express'),
//     swaggerDocument = require('./swagger.json');


app.use(cors());
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', cekdatagururoutes);

// app.use(
//     '/api-docs',
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerDocument)
// )


app.use((req, res, next) => {
    const error = new Error('Not found from server');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})


const port = process.env.DB_PORT ;
const db_name = process.env.DB_NAME;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Database name is ${db_name}`);
    console.log('Database user : ' + process.env.DB_USER);
    console.log('app sudah aktif');
})