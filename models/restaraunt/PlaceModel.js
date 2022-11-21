import { model, Schema } from "mongoose";

const PlaceSchema = new Schema({
  name: String,

  photo: [{ ref: "Image", type: Schema.Types.ObjectId }],

  schedule: [{ ref: "Schedule", type: Schema.Types.ObjectId }],

  phoneNumber: String,

  discription: String,

  rating: { ref: "Rating", type: Schema.Types.ObjectId },

  menu: [{ ref: "Dish", type: Schema.Types.ObjectId }],

  comments: [{ ref: "Comment", type: Schema.Types.ObjectId }],

  subscribe: { type: String },

  AVGPrice: Number,

});

export default model("Place", PlaceSchema);
