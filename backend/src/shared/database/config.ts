import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()
const ENV = process.env
const env: any = {

  DB_HOST: ENV.DB_HOST,
  DB_DIALECT: ENV.DB_DIALECT,
  DB_PORT: ENV.DB_PORT,
  DB_USERNAME: ENV.DB_USERNAME,
  DB_PASSWORD: ENV.DB_PASSWORD,
  DB_DATABASE: ENV.DB_DATABASE

}

Object.entries(env).forEach(([key, value]) => {
  if (value === 'true' || value === 'false') {
    env[key] = JSON.parse(value.toLowerCase())
  }
})

const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  port: env.DB_PORT,
  logging: false
})

export default sequelize
