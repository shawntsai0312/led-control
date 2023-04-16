import express from 'express'
const router = express.Router()

router.get('/change', (req, res) => {
    console.log(req.query.state)
    res.send({ msg: 'receive' })
})
export default router