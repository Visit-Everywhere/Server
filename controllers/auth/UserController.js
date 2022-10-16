import UserService from "#authService/UserService";

class UserContoller {
  async register(req, res, next) {
    try {
      const { email, password, gender, username } = req.body;
      const { UserModel } = req.models;
      const userInfo = await UserService.register(email, password, gender, username, UserModel);
      res.status(200).json(userInfo);
    } catch (err) {
      next(err)
    }
  }
  async checkCode(req, res, next) {
    try {
      const { UserModel, TokenModel } = req.models
      const { email, code } = req.body
      let userInfo = await UserService.checkCode(email, code, UserModel, TokenModel);
      res.status(200).json(userInfo);
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
  async login(req, res, next) {
    try {
    } catch (err) {
      console.log(`This is error:${err}`);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (err) {
      console.log(`This is error:${err}`);
    }
  }
  async activate(req, res, next) {
    try {
    } catch (err) {
      console.log(`This is error:${err}`);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (err) {
      console.log(`This is error:${err}`);
    }
  }
}

export default new UserContoller();
