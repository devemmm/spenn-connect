const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { requestCustomer, isPayed } = require('./spenn-api')

const port = process.env.PORT
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templete/views')

// Set Up handbars Engine and views Location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
app.get('/', async(req, res)=>{
    res.render("index")
})

app.post("/proced", async(req, res)=>{

    const {phoneNumber, amount} = req.body
    
    try {
        const {$id, requestId, status } = await requestCustomer(phoneNumber, amount)
       
        if( await isPayed(requestId)){
           return res.render("successPage")
        }

        res.render("pending")
    } catch (error) {
        res.send(error.message)
    }
})


app.get('/success', async(req, res)=>{

    res.render("successPage")
})


app.listen(port, ()=>console.log(`Server is running on port ${port}`))

