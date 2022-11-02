import { model, Schema } from "mongoose";

const PlaceSchema = new Schema({

    name:{type: String, required: true},

    photo: [{link: String}],

    schedule:[{ref: 'RestarauntSchedule'}],

    phoneNumber: Number,

    discription: String,

    rating:{ref:'RestarauntRating'},

    menu:[{ref: 'RestarauntDish', section: 'String'}],

    comments:[{ref:'RestarauntComment'}],

    location:{address: String, coordinates: Number},

    subscribe:{type: String},
    
})

export default model('Place', PlaceSchema)