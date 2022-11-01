import { Model, Schema } from "mongoose";

const RestarauntSchema = new Schema({

    name:{type: String, required: true},

    photo: [{ref: 'RestarauntPhoto'}],

    schedule:{type: Object, ref: 'RestarauntSchedule'},

    phoneNumber: Number,

    discription: String,

    rating:{type: Object, ref:'RestarauntRating'},

    menu:[{ref: 'RestarauntMenu'}],

    comments:[{ref:'RestarauntComment'}],

    location:{address: String, coordinates: Number},

    customize:{ref:'RestarauntCustomize'},

    socials:{ref:'RestarauntSocials'},

    subscribe:{type: String},
    
})