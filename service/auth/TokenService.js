import jwt from "../../utils/jwt.js";

class TokenService {
  async saveToken(userID, refreshToken, tokenModel) {
    const checkToken = await tokenModel.findOne({ user: userID });
    if (checkToken) {
      checkToken.refreshToken = refreshToken;
    }
    const token = await tokenModel.create({ user: userID, refreshToken });
    return token;
  }
  async removeToken(refreshToken, tokenModel) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }
  async findToken(token, model){
    const findedToken = await model.findOne({token})   
    return findedToken
  }
  validateRefreshToken(token) {
    try {
      const userData = jwt.verifyRefresh(token);
      return userData;
    } catch (err) {
      return null
    }
  }
  validateAccessToken(token) {
    try {
      const userData = jwt.verifyAccess(token);
      return userData;
    } catch (err) {
      return null
    }
  }
  
}

export default new TokenService();
