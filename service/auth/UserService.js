import bcrypt from "bcrypt";
import tokenService from "./TokenService.js";
import UserDto from "../../dtos/UserDto.js";
import fs from "fs";
import path from "path";
import mailer from "#utils/nodemailer";
import codeGenerator from "#utils/codeGenerator";
import JWT from "#utils/jwt";
import { ValidationError } from '#utils/errors'

class UserService {
  async register(email, password, gender, username, userModel) {   
    const person = await userModel.findOne({ email });
    if (person) {
      throw new ValidationError(400, 'This user is exist')
    }
    const hashedPassword = await bcrypt.hash(password, 3);
    let code = codeGenerator();

    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "json", "users.json"), "utf8")) || {};
    users[email] = { email, password: hashedPassword, gender, username, code: code };
    fs.writeFileSync(path.join(process.cwd(), "json", "users.json"), JSON.stringify(users, null, 4)); // writing to json file

    mailer({ // not working in class
      from: "xayrullohabduvohidov713@gmail.com",
      to: email, // to user
      subject: "Visit Everywhere",
      text: `This is your verification code ${code}`,
    });
  }
  async checkCode(email, code, userModel, tokenModel) {
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "json", "users.json"), "utf8")) || {};

    let currentUser = users[email];
    delete users[email];
    fs.writeFileSync(path.join(process.cwd(), "json", "users.json"), JSON.stringify(users, null, 4)); // writing to json file

    if (currentUser && currentUser.code == code) {
        // const user = await userModel.create({
        //   email: currentUser.email,
        //   password: currentUser.password,
        //   gender: currentUser.gender,
        //   username: currentUser.username,
        // });
        // console.log('mother....');
        const userDto = new UserDto({email: currentUser.email, password: currentUser.password, gender: currentUser.gender, username: currentUser.username, id:1, isActivated: true});
        const tokens = { accesToken: JWT.sign({ ...userDto }), refreshToken: JWT.refresh({ ...userDto }) };
        await tokenService.saveToken(userDto.id, tokens.refreshToken, tokenModel);
        return { ...tokens, userDto };
        return {status: 'ok'}
      
    } else {
      throw new ValidationError(400, 'Code does not match')
    }
  }
}

export default new UserService();
