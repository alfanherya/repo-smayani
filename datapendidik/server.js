// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// // const morgan = require('morgan');
// const cekdatagururoutes = require('./routes/routes.cekdataguru');
// // const swaggerUi = require('swagger-ui-express'),
// //     swaggerDocument = require('./swagger.json');


// app.use(cors());
// // app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use('/', cekdatagururoutes);

// // app.use(
// //     '/api-docs',
// //     swaggerUi.serve,
// //     swaggerUi.setup(swaggerDocument)
// // )


// app.use((req, res, next) => {
//     const error = new Error('Not found from server');
//     error.status = 404;
//     next(error);
// })

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// })


// const port = process.env.DB_PORT ;
// const db_name = process.env.DB_NAME;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     console.log(`Database name is ${db_name}`);
//     console.log('Database user : ' + process.env.DB_USER);
//     console.log('app sudah aktif');
// })


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/**
 * create express app
 */
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * setup server port
 */
require('dotenv').config();
const port = process.env.PORT;

/**
 * define root router
 */
app.get('/', (req, res)=> {
    res.send("Selamat datang di API Manager SMAYANI");
})

/**
 * using middleware
 */
const cekdataroutes = require('./routes/routes.cekdataguru');
app.use('/api/v1', cekdataroutes);

/**
 * listen for requests hit
 */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
