import { model, Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    name: String,
    text: String,
    food: {type: Number, min: 1, max: 5 },
    servise: {type: Number, min: 1, max: 5 },
    ambience: {type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
);

export default model("Comment", CommentSchema);
