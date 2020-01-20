import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { datosPersonales } from './src/index';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cv_web', {useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
   .use(bodyParser.json())
   .use(morgan('short'));

app.use(express.json());

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/


app.get('/', function (req, res) {
    res.send('root url');
});

app.use('/api', datosPersonales);

app.listen(3000, () => {
    console.log("El servidor está corriendo en el puerto 3000");
});