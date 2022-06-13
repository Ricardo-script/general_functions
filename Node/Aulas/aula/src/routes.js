import { Router } from "express";
import SessionController from "./controllers/SessionController.js";
import HouseController from "./controllers/HouseController.js";

const routes = new Router();

routes.get('/sessions', SessionController.store);
routes.post('/sessions', SessionController.store);

routes.post('/houses', HouseController.store);

export default routes;



