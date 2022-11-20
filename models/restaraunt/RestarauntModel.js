import { model, Schema } from "mongoose";

const RestarauntSchema = new Schema({
  places: [{type: Schema.Types.ObjectId, ref: "Place" }],
});

export default model("Restaraunt", RestarauntSchema);
