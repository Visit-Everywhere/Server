import JWT from "jsonwebtoken";

class TokenService {
  generateToken(payload) {
    const accessToken = JWT.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_EXP,
    });

    const refreshToken = JWT.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_EXP_REFRESH,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
  async saveTocken(userID, refreshToken, tokenModel) {
    const checkToken = await tokenModel.findOne({ user: userID });
    if (checkToken) {
      checkToken.refreshToken = refreshToken;
    }
    const token = await tokenModel.create({ user: userID, refreshToken });
    return token;
  }
}

export default new TokenService();
