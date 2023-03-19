import Sequelize from 'sequelize'
import database from '../../shared/database/config'
// import { noContent } from '../../shared/errors/helper/http-helper'

export interface User {
  user_id: string
  email: string
  password: string
  passwordConfirmation: string
  name: string
  surname: string
  phone: number
  token_id: number
}

class UserModel {
  user: any

  constructor () {
    this.user = database.define('user', {
      user_id: {
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
      passwordConfirmation: {
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
      },
      token_id: {
        type: Sequelize.UUID,
        allowNull: false
      }
    })
    this.user.sync({ force: false })
  }

  async findOne (email: string): Promise<User> {
    const user = await this.user.findOne({
      where: { email },
      attributes: ['user_id', 'email', 'password', 'passwordConfirmation', 'name', 'surname', 'phone', 'token_id']
    })
    return user
  }

  //   async create (comment: string, idPost: number): Promise<void> {
  //     await this.comments.create({ text: comment, idPost })
  //   }

  //   async getCommentById (id: string): Promise<Comment> {
  //     const comment = await this.comments.findOne({
  //       where: { id },
  //       attributes: ['id', 'text', 'idPost']
  //     })
  //     return comment
  //   }

  //   async deleteComment (id: string): Promise<number> {
  //     await this.comments.destroy({ where: { id } })

//     return noContent()
//   }
}

export default new UserModel()
