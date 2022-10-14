import bcrypt from "bcrypt";
import tokenService from "./TokenService.js";
import UserDto from "../../dtos/UserDto.js";


class UserService {
  async registration(email, password, gender, username, User, tockenModel) {
    const person = await User.findOne({ email });
    if (person) {
      console.error(`Пользователь с почтой ${email} уже зарегестрирован`);
    }
    const hashedPassword = await bcrypt.hash(password, 3);
    const user = await User.create({
      email,
      password: hashedPassword,
      gender,
      username,
    });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto})
    await tokenService.saveTocken(userDto.id, tokens.refreshToken, tockenModel)
    return { ...tokens, userDto }
  }
}

export default new UserService();
