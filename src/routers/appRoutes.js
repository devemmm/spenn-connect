const express = require('express')
const { setInterval } = require('timers')
const { requestCustomer, isPayed } = require('../spenn-api')

const router = express.Router()

router.get('/', async(req, res)=>{
    res.render("index")
})


router.post("/proced", async(req, res)=>{

    const {phoneNumber, amount} = req.body
    
    try {
        const {$id, requestId, status } = await requestCustomer(phoneNumber, amount)
       
        const checker = setInterval(()=>{
            isPayed(requestId)
            .then((requestStatus)=>{
                switch(requestStatus){
                    case 'Pending':
                        break;
                    case 'Rejected':
                        clearInterval(checker)
                        return res.render("pending")
                    case 'Approved':
                        clearInterval(checker)
                        return res.render("successPage")
                    default:
                        break;
                }
            })
            .catch((error)=>{
                console.log(error.message)
            })

        }, 2000)
        
    } catch (error) {
       return res.send(error.message)
    }
})


router.get('/success', async(req, res)=>{
    res.render("successPage")
})

router.get('/**', (req, res)=>{
    res.status(404).json({message: 'page not found'})
})

module.exports = router;