import JWT from 'jsonwebtoken'

export default {
    sign: payload => JWT.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_EXP }),
    refresh: payload => JWT.sign((payload, process.env.JWT_REFRESH_SECRET ),{expiresIn: process.env.JWT_EXP_REFRESH}),
    verify: token => JWT.verify(token, process.env.JWT_ACCESS_SECRET ),
}