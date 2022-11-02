import { model, Schema } from "mongoose";

const RestarauntSchema = new Schema({
    places: [{ref: 'Restaraunt'}]
})

export default model('Restaraunt', RestarauntSchema)