// import { ok } from '../../../shared/errors/helper/http-helper'
// import { type Request, type Response } from 'express'

export interface UserStageThree {
  name: string
  surname: string
  phone: string
}

// export class UserStageThree {
//   async create (req: Request, res: Response): Promise<Response> {
//     const { name, surname, phone } = req.body as UserStageThree

//     return res.send(ok({ message: 'ok' }))
//   }
// }

// export default new UserStageThree()
