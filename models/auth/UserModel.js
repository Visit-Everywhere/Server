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
    isActivated: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    photo: {
      type: Schema.Types.ObjectId,
      ref: "image",
    },
    purchaseHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dish",
      },
    ],
    savedPlaces: {
      type: Schema.Types.ObjectId,
      ref: "Place",
    },
    roles: [
      {
        type: String,
        unique: true,
        default: "USER",
      },
    ],
  },
  { timestamps: true }
);

export default model("User", UserSchema);
