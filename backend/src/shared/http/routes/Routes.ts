import UserStageOne from '../../../modules/models/services/UserStageOne'
import UserStageTwo from '../../../modules/models/services/UserStageTwo'
// import UserStageThree from '../../../modules/models/services/UserStageThree'
import { type Request, type Response, Router } from 'express'
const routes = Router()

routes.get('/', (_: Request, res: Response) => {
  return res.json({ message: 'Olá mundo!' })
})

routes.post('/stageone', UserStageOne.create)
routes.post('/stagetwo', UserStageTwo.create)
// routes.post('/stagethree', UserStageThree.create)

export default routes
