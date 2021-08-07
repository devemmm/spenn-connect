const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const appRoutes = require('./routers/appRoutes')

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
app.use(appRoutes)

app.listen(port, ()=>console.log(`Server is running on port ${port}`))