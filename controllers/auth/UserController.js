import UserService from "#authService/UserService"

class UserContoller {
  async registration(req, res, next) {
    try {
        const { email, password, gender, username } = req.body
        const { UserModel, TokenModel } = req.models
        const userInfo = await UserService.registration(email, password, gender, username, UserModel, TokenModel)
        res.status(200).json(userInfo)
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
  async checkCode(req, res, next) {
    try {
      let clientCode = req.body // need to know exactly what comes from body
      

    } catch (err) {

    }
  }
}

export default new UserContoller();
