import mongoose from 'mongoose'
import dotenv from 'dotenv'// connecting dotenv
dotenv.config()

connect()

import models from '../models/index.js'

async function connect() {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('DB connected');
}

export default {
    models
}