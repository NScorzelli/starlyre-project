import Sequelize from 'sequelize'
import database from '../../shared/database/config'
import { ok } from '../../../src/shared/errors/helper/http-helper'
import bcrypt from 'bcrypt'

class UserModel {
  User: any

  constructor () {
    this.User = database.define('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
    this.User.sync({ force: false })
  }

  async create (email: string, password: string, name: string, surname: string, phone: string): Promise<Response> {
    const hash = await bcrypt.hash(password, 10)
    await this.User.create({
      email,
      password: hash,
      name,
      surname,
      phone
    }

    )
    return ok({ message: 'User created' })
  }

  async findOne (email: string): Promise<Response> {
    const user = await this.User.findOne({
      where: { email },
      attributes: ['id', 'email', 'password']
    })
    return user
  }

  async findById (id: string): Promise<Response> {
    const user = await this.User.findOne({
      where: { id },
      attributes: ['id', 'email', 'password']
    })
    return user
  }
}

export default new UserModel()
