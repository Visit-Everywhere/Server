import { model, Schema } from "mongoose";

const RatingSchema = new Schema({
  AVG: { Number },
  food: { Number },
  service: { Number },
  ambience: { Number },
  reviews: { Number },
  marks: { Number },
});

export default model("Rating", RatingSchema);
