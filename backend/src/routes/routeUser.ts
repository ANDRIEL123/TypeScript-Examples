import { Router } from 'express'
import UserController from '../controllers/UserController'
const routes = Router();

routes.get('/raiz', UserController.getUser)

export default routes
