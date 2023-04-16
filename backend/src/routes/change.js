import express from 'express'
import { Gpio } from 'onoff'

const router = express.Router()
var Led = new Gpio(4, 'out')

router.get('/change', (req, res) => {
    let light = req.query.state === 'true' ? 1 : 0;
    console.log(light)
    console.log(Led.readSync())
    Led.writeSync(light)
    // if(req.query.state != Led.readSync())
    light ? res.send({ msg: 'on' }) : res.send({ msg: 'off' })
})
export default router