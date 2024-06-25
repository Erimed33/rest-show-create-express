const express = require('express')
const app = express()
const logsArray = require('./models/logs')

app.use(express.json())


app.get('/', (req, res) => {
    res.send(`welcome to the captain's log`)
})

// get /logs

app.get('/logs', (req, res) => {
    res.json(logsArray)
})

// Post /logs

// app.post('/logs', (req, res) => {
//     const newLog =req.body;
//     logsArray.push(newLog)
//     req.status(303).location('/logs').end()
// })

// get -> /longs


module.exports = app