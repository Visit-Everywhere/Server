import UserService from "#authService/UserService";

class UserContoller {
  async register(req, res, next) {
    try {
      const { email, password, gender, username } = req.body;
      const { UserModel } = req.models;
      const { readFile, writeFile } = req
      await UserService.register(email, password, gender, username, UserModel, readFile, writeFile);
      res.status(200).json({status: 200, message: 'Code sended to user email'});
    } catch (err) {
      next(err)
    }
  }
  async checkCode(req, res, next) {
    try {
      const { UserModel, TokenModel } = req.models
      const { email, code } = req.body
      const { readFile, writeFile } = req
      let userInfo = await UserService.checkCode(email, code, UserModel, TokenModel, readFile, writeFile);
      res.status(200).json(userInfo);
    } catch (err) {
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
