class TokenService {
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
