class TokenService {
  async saveToken(userID, refreshToken, tokenModel) {
    const checkToken = await tokenModel.findOne({ user: userID });
    if (checkToken) {
      checkToken.refreshToken = refreshToken;
    }
    const token = await tokenModel.create({ user: userID, refreshToken });
    return token;
  }
  async removeToken(refreshToken,tokenModel){
    console.log(tokenModel)
    const tokenData = await tokenModel.deleteOne({refreshToken})
    return tokenData
  }
}

export default new TokenService();
