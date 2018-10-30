let mongoose = require('mongoose')

///connecting database to local server
mongoose.connect('mongodb://localhost/nba')

mongoose.connect('open', () => {

    console.log('Mongoose is connected')
})