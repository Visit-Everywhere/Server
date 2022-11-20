import { Schema, model } from "mongoose";

const ScheduleSchema = new Schema({
  day: String,
  startDay: String,
  endDay: String,
  dayOff: {type: Boolean, default: false}
});

export default model('Schedule', ScheduleSchema)



