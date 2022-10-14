export default class UserDto{
    email;
    gender;
    id;
    isActivated
    constructor(model){
        this.email = model.email
        this.gender = model.gender
        this.id = model._id
        this.isActivated = model.isActivated
    }
}
