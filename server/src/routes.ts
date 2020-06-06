import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PoitsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const upload = multer(multerConfig);

const poitsController = new PoitsController();
const itemsController = new ItemsController();

/* padrões: index, show, create, update delete/destroy */
routes.get('/items', itemsController.index);

routes.get('/points', poitsController.index);
routes.get('/points/:id', poitsController.show);

routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }, {
        abortEarly: false
    }),
    poitsController.create);

export default routes;

/*
pontos de melhoria aqui....
Service Pattern
Repository Pattern (Data Mapper)
*/