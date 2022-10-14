import express from 'express';
import Router from './routes/index.js' // all routes
import DB from './utils/connectMongoose.js' // DB connecting

try {
    const app = express();
    const { models } = DB // extracting al models
    const PORT = process.env.PORT || 3000

    // middlewares
    app.use((req, res, next) => { // now in every request would be our models, we don't need to import everywhere
        req.models = models
        next()
    })

    // app.use(express.static('public')) // if project is 1 tier
    app.use(Router)

    app.listen(PORT, console.log(`I'm ready on http://localhost:${PORT}`))
} catch (mainError) {
    console.log("Main code error: " + mainError)
}
