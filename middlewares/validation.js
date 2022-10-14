import {
  userValidationRegister, 
  userValidationLogin, 
  userValidationToken, 
} from "../validation/validations.js"
import { ValidationError } from "../utils/errors.js"

export default (req, res, next) => {
  try {

      if (req.method === 'POST' && req.url == '/register') {
          const { error } = userValidationRegister.validate({ body: req.body })
          if(error) throw error
      }

      if (req.method === 'POST' && req.url == '/login') {
          const { error } = userValidationLogin.validate({ body: req.body })
          if(error) throw error
      }

      if (req.method === 'GET' && req.url == '/checkToken') {
          const { error } = userValidationToken.validate({ query: req.query })
          if(error) throw error
      }
      return next()
  } catch (error) {
      return next(new ValidationError(400, error.message))
  }
}