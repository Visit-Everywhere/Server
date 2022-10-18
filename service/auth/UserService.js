import bcrypt from "bcrypt";
import tokenService from "./TokenService.js";
import UserDto from "../../dtos/UserDto.js";
import mailer from "#utils/nodemailer";
import codeGenerator from "#utils/codeGenerator";
import JWT from "#utils/jwt";
import { ValidationError } from '#utils/errors'

class UserService {
  async register(email, password, gender, username, userModel, readFile, writeFile) { 
    try {
      const person = await userModel.findOne({ email });
      if (person) {
        throw new ValidationError(400, 'This user is exist')
      }
      const hashedPassword = await bcrypt.hash(password, 3);
      let code = codeGenerator();
      let users = readFile('users')
      users[email] = { email, password: hashedPassword, gender, username, code: code };
      writeFile('users', users)
  
      mailer({
        from: "xayrullohabduvohidov713@gmail.com",
        to: email, // to user
        subject: "Visit Everywhere",
        text: `This is your verification code ${code}`,
      });
    } catch (error) {
      throw error
    }
  }
  async checkCode(email, code, userModel, tokenModel, readFile, writeFile) {
    try {
      let users = readFile('users')
  
      let currentUser = users[email];
      delete users[email];
      writeFile('users', users)
  
      if (currentUser && currentUser.code == code) {
          const user = await userModel.create({
            email: currentUser.email,
            password: currentUser.password,
            gender: currentUser.gender,
            username: currentUser.username,
          });
          const userDto = new UserDto(user);
          const tokens = { accesToken: JWT.sign({ ...userDto }), refreshToken: JWT.refresh({ ...userDto }) };
          await tokenService.saveToken(userDto.id, tokens.refreshToken, tokenModel);
          return { ...tokens, userDto };
        
      } else {
        throw new ValidationError(400, 'Code does not match')
      }
    } catch (error) {
      throw error
    }
  }
}

export default new UserService();
