///Connected the connections page to my player model
let mongoose = require('../db/connections')
let Schema = mongoose.Schema

///Player Model
let LakersPlayer = new Schema({

    name: String,
    number: Number,
    team: String,
    img: String
})

module.exports = mongoose.model('Lakers', LakersPlayer)