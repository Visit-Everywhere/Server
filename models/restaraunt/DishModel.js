import { model, Schema } from "mongoose";

const DishSchema = new Schema({
  name: String,
  discription: String,
  price: Number,
  weight: String,
  sale: {type: Number, max: 100 },
  time: Number,
  photo: { type: Schema.Types.ObjectId, ref: "Image" },
  section: String,
});

export default model("Dish", DishSchema);
