import { Router } from 'express'

const router = Router()

// home
router.get('/', (req, res) => {res.send('Hello VE')})

export default router