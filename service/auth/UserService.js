import bcrypt from "bcrypt";
import tokenService from "./TokenService.js";
import UserDto from "../../dtos/UserDto.js";
import fs from "fs";
import path from "path";
import mailer from "#utils/nodemailer";
import codeGenerator from "#utils/codeGenerator";
import JWT from "#utils/jwt";

class UserService {
  async registration(req, res, next) {
    const { email, password, gender, username } = req.body;
    const person = await req.models.UserModel.findOne({ email });
    if (person) {
      console.error(`Пользователь с почтой ${email} уже зарегестрирован`);
    }
    const hashedPassword = await bcrypt.hash(password, 3);
    let code = codeGenerator();

    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "json", "users.json"), "utf8")) || {};
    users[email] = { email, password: hashedPassword, gender, username, code: code };
    fs.writeFileSync(path.join(process.cwd(), "json", "users.json"), JSON.stringify(users, null, 4)); // writing to json file

    mailer({
      from: "xayrullohabduvohidov713@gmail.com", // my email address
      to: email, // to user
      subject: "Visit Everywhere",
      text: `This is your verification code ${code}`,
    });
  }
  async checkCode(req, res, next) {
    const { email, code } = req.body;
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "json", "users.json"), "utf8")) || {};

    let currentUser = users[email];
    delete users[email];
    fs.writeFileSync(path.join(process.cwd(), "json", "users.json"), JSON.stringify(users, null, 4)); // writing to json file

    if (currentUser && currentUser.code == code) {
      const user = await req.models.UserModel.create({
        email: currentUser.email,
        password: currentUser.password,
        gender: currentUser.gender,
        username: currentUser.username,
      });

      const userDto = new UserDto(user);
      const tokens = { accesToken: JWT.sign({ ...userDto }), refreshToken: JWT.sign({ ...userDto }) };
      await tokenService.saveToken(userDto.id, tokens.refreshToken, req.models.TokenModel);
      return { ...tokens, userDto };
    } else {
      // error
    }
  }
}

export default new UserService();
