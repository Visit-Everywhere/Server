import { Model, Schema } from "mongoose";

const RestarauntSchema = new Schema({
    places: [{ref: 'Restaraunt'}]
})