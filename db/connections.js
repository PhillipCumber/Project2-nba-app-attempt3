require('dotenv').config()

let mongoose = require('mongoose')

///connecting database to local server
mongoose.connect('mongodb://localhost/nba-team')

mongoose.connect('open', () => {

    console.log('Mongoose is connected')
})

////
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
 })

module.exports = mongoose