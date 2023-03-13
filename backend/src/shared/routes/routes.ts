import { type Request, type Response, Router } from 'express'
const routes = Router()

routes.get('/', (_: Request, res: Response) => {
  return res.json({ message: 'Olá mundo!' })
})

export default routes
