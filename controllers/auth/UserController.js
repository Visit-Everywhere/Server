import UserServise from "../../service/auth/UserServise.js";

class UserContoller {
  async registration(req, res, next) {
    try {
        const { email, password, gender, username } = req.body
        const { UserModel } = req.models
        const userInfo = await UserServise.registration(email, password, gender, username, UserModel)
        res.status(202).json(userInfo)
    } catch (err) {
      console.log(`This is error:${err}`);
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
