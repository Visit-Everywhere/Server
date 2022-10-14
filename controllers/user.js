import { ValidationError, AuthorizationError, InternalServerError, BadRequestError } from '#utils/errors'
import JWT from '#/utils/jwt'
// import sha256 from 'sha256'
import path from 'path'

const GET = (req, res, next) => {
    try {
        const users = req.readFile('users')
        res.json(users.map(user => {
            delete user.password
            return user
        }))
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}