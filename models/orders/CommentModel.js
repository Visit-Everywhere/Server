import { model, Schema } from "mongoose";

const CommentSchema = new Schema({
    name: String,
    text: String,
})

export default model('RestarauntComment', CommentSchema)