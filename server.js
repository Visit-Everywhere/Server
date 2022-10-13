import express from 'express';
import Router from './routes/index.js' // all routes
import DB from './db/connect.mongoose.js' // DB connecting
process.env.PORT = process.env.PORT || 5000 // configuring port

const app = express();
const { models } = DB // extracting al models

// middlewares
app.use((req, res, next) => { // now in every request would be our models, we don't need to import everywhere
    req.models = models
    next()
})
// app.use(express.static('public')) // if project is 1 tier
app.use(Router)

app.listen(process.env.PORT, console.log("I'm ready on http://localhost:" + (process.env.PORT)))