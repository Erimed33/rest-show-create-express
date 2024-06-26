const app = require('./app')

require("dotenv".config())
const port = process.env.port


app.listen(port, () => {
    console.log(`Listening port: ${port}`)
})