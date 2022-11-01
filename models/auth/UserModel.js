import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    role: [
      {
        type: String,
        ref: "Role",
      },
    ],
  },
  { timestamps: true }
);

export default model("User", UserSchema);
