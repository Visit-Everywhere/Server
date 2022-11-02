import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
  link: {
    type: String,
    required: true,
    unique: true,
  },
  key: {
    type: String,
    required: true,
  },
});

export default model("Image", ImageSchema);
