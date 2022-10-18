import UserService from "#authService/UserService";

class UserContoller {
  // register
  async register(req, res, next) {
    try {
      const { email, password, gender, username } = req.body;
      const { UserModel } = req.models;
      const { writeData } = req
      await UserService.register(email, password, gender, username, UserModel, writeData);
      res.status(200).json({status: 200, message: 'Code sended to user email'});
    } catch (err) {
      next(err)
    }
  }
  async checkCode(req, res, next) {
    try {
      const { UserModel, TokenModel } = req.models
      const { email, code } = req.body
      const { readData, deleteData } = req
      let userInfo = await UserService.checkCode(email, code, UserModel, TokenModel, readData, deleteData);
      res.status(200).json(userInfo);
    } catch (err) {
      next(err)
    }
  }
  // login
  async login(req, res, next) {
    try {
      const { UserModel, TokenModel } = req.models
      const { email, password } = req.body
      let userInfo = await UserService.login(email, password, UserModel, TokenModel);
      res.cookie('refreshToken', userInfo.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      res.status(200).json(userInfo);
    } catch (err) {
      next(err)
    }
  }
  // restore
  async restoreEmail(req, res, next) {
    try {
      const { UserModel } = req.models
      const { email } = req.body
      const { writeData } = req
      await UserService.restoreEmail(email, UserModel, writeData)
      res.status(200).json({status: 200, message: 'Code sended to user email'});
    } catch (err) {
      next(err)
    }
  }
  async restoreCode(req, res, next) {
    try {
      const { readData } = req
      const { email, code } = req.body
      await UserService.restoreCode(email, code);
      res.status(200).json({status: 200, message: 'Code is valid'});
    } catch (err) {
      next(err)
    }
  }
  async restorePassword(req, res, next) {
    try {
      const { UserModel, TokenModel } = req.models
      const { email, password } = req.body
      const { readData, deleteData } = req
      let userInfo = await UserService.restorePassword(email, password, UserModel, TokenModel, readData, deleteData);
      res.cookie('refreshToken', userInfo.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      res.status(200).json(userInfo);
    } catch (err) {
      next(err)
    }
  }


  // logout
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
