import bcrypt from 'bcrypt'


class UserService{
    async registration(email, password, gender, username, User){
        const person = await User.findOne({email})
        if(person){
            console.error(`Пользователь с почтой ${email} уже зарегестрирован`)
        }
        const hashedPassword = await bcrypt.hash(password, 3)
        await User.create({email, password: hashedPassword, gender, username})

        return { email, username, gender }
    }
}

export default new UserService