import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
  value: { type: String, unique: true, default: "user" },
});

export default model("Role", RoleSchema);
