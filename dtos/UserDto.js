export default class UserDto {
  email;
  id;
  isActivated;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = true;
    this.username = model.username
    this.userRoles = model.roles
  }
}
