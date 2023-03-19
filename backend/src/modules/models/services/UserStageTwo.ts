import { MissingParamError } from '../../../../src/shared/errors/missing-param-error'
import { type Request, type Response } from 'express'
import { badRequest, ok } from '../../../shared/errors/helper/http-helper'
import validator from 'validator'
import { InvalidParamError } from '../../../../src/shared/errors/invalid-param-error'

export interface UserStageTwo {
  name: string
  surname: string
  phone: string
}

export class UserStageTwo {
  async create (req: Request, res: Response): Promise<Response> {
    const { name, surname, phone } = req.body as UserStageTwo

    if (!name || !surname || !phone) {
      return res.status(400).send(new MissingParamError('name or surname or phone'))
    }

    const isPhone = validator.isMobilePhone(phone, 'pt-BR')

    if (!isPhone) {
      console.log('Invalid phone')
      return res.status(400).send(badRequest(new InvalidParamError('phone')))
    }

    return res.send(ok({ message: 'ok' }))
  }
}

export default new UserStageTwo()
