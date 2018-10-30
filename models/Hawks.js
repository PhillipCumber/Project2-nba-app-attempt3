///Connected the connections page to my player model
let mongoose = require('../db/connection')
let Schema = mongoose.Schema

///Player Model
let HawksPlayer = new Schema({

    name: String,
    number: Number,
    team: String,
    img: String
})

module.exports = mongoose.model('Hawks', HawksPlayer)