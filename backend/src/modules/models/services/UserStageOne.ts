import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { type Request, type Response } from 'express'
import { badRequest, ok } from '../../../shared/errors/helper/http-helper'
import { MissingParamError } from '../../../shared/errors/missing-param-error'
import UserModel from '../UserModel'
import validator from 'validator'

export interface UserStageOne {
  email: string
  password: string
  passwordConfirmation: string
}

export interface EmailValidator {
  isEmail: (email: string) => boolean
}

export class UserStageOne {
  async create (req: Request, res: Response): Promise<Response> {
    const { email, password, passwordConfirmation } = req.body as UserStageOne

    if (!email || !password || !passwordConfirmation) {
      return badRequest(new MissingParamError('text or idPost or passwordConfirmation'))
    }

    if (password !== passwordConfirmation) {
      return res.status(400).send(badRequest(new Error('password and passwordConfirmation must be equal')))
    }

    const isValid = validator.isEmail(email)

    if (!isValid) {
      return res.status(400).send(badRequest(new InvalidParamError('email')))
    }

    const getUser = await UserModel.findOne(email)

    if (getUser) {
      return badRequest(new MissingParamError('User already exists'))
    }

    return res.send(ok({ message: 'ok' }))
  }
}

export default new UserStageOne()
