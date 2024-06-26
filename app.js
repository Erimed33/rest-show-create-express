const express = require('express')
const app = express()
const logsArray = require('./models/logs')
const logRouter = require('./controllers/logsController')

app.use(express.json())

// home
app.get('/', (req, res) => {
    res.send(`welcome to the captain's log`)
})


// redirect to logsController to handle show and post(create)

app.use('/logs', logRouter)




// 404 route to show when route doesn't exist

app.use((req, res, next) => {
    res.status(404).send("Sorry, cant find that")
})



module.exports = app