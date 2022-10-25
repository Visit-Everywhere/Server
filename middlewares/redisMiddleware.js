import Redis from 'redis'
import { InternalServerError } from '#utils/errors'

let redisClient = Redis.createClient()

await redisClient.connect()
redisClient.on('error', (err) => console.log('Redis Client Error', err));

export default () => {
  return (req, res, next) => {
      try {
          req.readData = async function (dataName) {
            return JSON.parse(await redisClient.get(dataName))
          }

          req.writeData = function (dataName, data) {
            redisClient.setEx(dataName, process.env.RS_EXP, JSON.stringify(data))
          }

          req.deleteData = function(dataName) {
            redisClient.del(dataName)
          }
          return next()
      } catch (error) {
          return next(new InternalServerError(500, error.message))
      }
  }
}