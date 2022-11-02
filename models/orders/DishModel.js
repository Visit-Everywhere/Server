import { model, Schema } from "mongoose";

const DishSchema = new Schema({
     name: String,
     discription: String,
     price: String,
     weight: String,
     discount: String,
     time: String,
     photo: String,

})

export default model('RestarauntDish', DishSchema)