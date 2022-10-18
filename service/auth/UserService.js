import bcrypt from "bcrypt";
import tokenService from "./TokenService.js";
import UserDto from "../../dtos/UserDto.js";
import mailer from "#utils/nodemailer";
import codeGenerator from "#utils/codeGenerator";
import JWT from "#utils/jwt";
import { ValidationError } from "#utils/errors";

class UserService {
  async register(email, password, gender, username, userModel, writeData) {
    try {
      const person = await userModel.findOne({ email });
      if (person) {
        throw new ValidationError(400, "This user is exist");
      }
      const hashedPassword = await bcrypt.hash(password, 3);
      let code = codeGenerator();

      writeData(email, {
        email,
        password: hashedPassword,
        gender,
        username,
        code: code,
      });

      mailer({
        from: "xayrullohabduvohidov713@gmail.com",
        to: email, // to user
        subject: "Visit Everywhere",
        text: `This is your verification code ${code}`,
      });
    } catch (error) {
      throw error;
    }
  }
  async checkCode(email, code, userModel, tokenModel, readData, deleteData) {
    try {
      let currentUser = await readData(email);

      if (currentUser && currentUser.code == code) {
        deleteData(email);

        const user = await userModel.create({
          email: currentUser.email,
          password: currentUser.password,
          gender: currentUser.gender,
          username: currentUser.username,
        });
        const userDto = new UserDto(user);
        const tokens = {
          accesToken: JWT.sign({ ...userDto }),
          refreshToken: JWT.refresh({ ...userDto }),
        };
        await tokenService.saveToken(
          userDto.id,
          tokens.refreshToken,
          tokenModel
        );
        return { ...tokens, userDto };
      } else {
        throw new ValidationError(400, "Code does not match");
      }
    } catch (error) {
      throw error;
    }
  }
  async login(email, password, userModel, tokenModel) {
    const user = userModel.findOne({ email });
    if (!user) {
      throw new ValidationError(400, "user with this email not found");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      throw new ValidationError(400, "password not valid");
    }
    const userDto = new UserDto(user);
    const tokens = {
      accesToken: JWT.sign({ ...userDto }),
      refreshToken: JWT.refresh({ ...userDto }),
    };
    await tokenService.saveToken(userDto.id, tokens.refreshToken, tokenModel);
    return {
      ...tokens,
      userDto,
    };
  }
}

export default new UserService();
