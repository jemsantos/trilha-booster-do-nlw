import express from 'express';

import PoitsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const poitsController = new PoitsController();
const itemsController = new ItemsController();

/* padrões: index, show, create, update delete/destroy */
routes.get('/items', itemsController.index);

routes.post('/points', poitsController.create);
routes.get('/points', poitsController.index);
routes.get('/points/:id', poitsController.show);

export default routes;

/*
pontos de melhoria aqui....
Service Pattern
Repository Pattern (Data Mapper)
*/