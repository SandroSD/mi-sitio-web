import express from 'express';
import { getAll } from './repository';
import DataGenerals from '../modelos/dataGeneral';

express.application.prefix = express.Router.prefix = function (path, configure) {
    const router = express.Router();
    this.use(path, router);
    configure(router);
    return router;
};

const app = express();

app.prefix('/general', (route) => {
    route.get('/infoPersonal', (req, res) => {
        DataGenerals.find((err, data) => {
            if(err) console.log("Error: ", err.message);
            console.log("data: ", data);

            res.status(200).send(data);
        })
    });
})


module.exports = app;