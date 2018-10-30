let mongoose = require('../db/connections')
let Schema = mongoose.Schema

////Team Model
let Team = new Schema({

    name: String,
    best: String,
    rings: Number,
    img: String,
    coach: String,
    url: String
})

module.exports = mongoose.model('Team', Team)