import express from 'express';
import CasoController from './controllers/CasosController';
const routes = express.Router();

const CasoControllers = new CasoController();

routes.post('/casos', CasoControllers.create)
routes.get('/cep', CasoControllers.cep)
routes.get('/cpf', CasoControllers.cpf)
routes.get('/tipo', CasoControllers.tipo)

export default routes