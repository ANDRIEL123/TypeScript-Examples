import { Router } from 'express'
import UserController from '../controllers/UserController'
const routes = Router();

routes.get('/', UserController.getUser)
routes.post('/post', UserController.create)


export default routes
