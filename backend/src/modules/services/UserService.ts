import { type Request, type Response } from 'express'
import { badRequest, ok } from '../../shared/errors/helper/http-helper'
import UserModel from '../models/UserModel'
import validator from 'validator'

export interface UserProps {
  email: string
  password: string
  name: string
  surname: string
  phone: string
}

export class StageOneService {
  async create (req: Request, res: Response): Promise<Response> {
    const { email, password, name, surname, phone } = req.body as UserProps

    const getUser = await UserModel.findOne(email)

    if (getUser) {
      return res.status(400).send(badRequest(new Error('User already exists')))
    }

    const isValid = validator.isMobilePhone(phone, 'pt-BR')

    if (!isValid) {
      return res.status(400).send(badRequest(new Error('Invalid phone number')))
    }

    await UserModel.create(
      email,
      password,
      name,
      surname,
      phone
    )

    return res.send(ok('done')).status(200)
  }
}

export default new StageOneService()
