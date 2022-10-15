import UserService from "#authService/UserService";

class UserContoller {
  async registration(req, res, next) {
    try {
      await UserService.registration(req, res, next);
      res.status(200).json({ status: 200 });
    } catch (err) {
      console.log(`This is error:${err}`);
    }
  }
  async checkCode(req, res, next) {
    try {
      let userInfo = await UserService.checkCode(req, res, next);
      res.status(200).json(userInfo);
    } catch (err) {
      // errory
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
