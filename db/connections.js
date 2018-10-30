let mongoose = require('mongoose')

///connecting database to local server
mongoose.connect('mongodb://localhost/nba-team')

mongoose.connect('open', () => {

    console.log('Mongoose is connected')
})

module.exports = mongoose