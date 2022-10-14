import bcrypt from 'bcrypt'

import MailService from './MailService.js'

class UserService{
    async registration(email, password, gender, User){
        const person = await User.findOne({email})
        if(person){
            console.error(`Пользователь с почтой ${email} уже зарегестрирован`)
        }
        const hashedPassword = await bcrypt.hash(password, 3)
        const activationLink = hashedPassword
        const user = await User.create({email, password: hashedPassword, gender})
    }
}

export default new UserService