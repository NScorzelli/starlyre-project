import UserService from '../../../modules/services/UserService'
import { Router } from 'express'
const routes = Router()

routes.post('/signup', UserService.create)

export default routes
