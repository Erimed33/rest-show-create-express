const express = require('express')
const logRouter = express.Router()
let logsArray = require('../models/logs')

 // show al the logs 
logRouter.get('/', (req, res) => {
    res.json(logsArray)
})


// show a single log
logRouter.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if (logsArray[arrayIndex]) {
        res.json(logsArray[arrayIndex])
    } else {
        res.redirect('/logs')
    }
})

// create a new oe (POST)
logRouter.post('/', (req, res) => {
    const newLog = req.body;
    logsArray.push(newLog)
    res.status(303).json(newLog)
})

// update

logRouter.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    logsArray[arrayIndex] =req.body
    res.status(303).location('/logs').end()

})

logRouter.delete('/:arrayIndex', (req, res) => {
    const {arrayIndex} = req.params
    logsArray.splice(arrayIndex, 1)
    res.status(303).location("/logs").end()
})
module.exports = logRouter