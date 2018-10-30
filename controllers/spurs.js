let express = require('express')
let Spurs = require('../models/Spurs')

let spursController = {

    index: (req, res) => {

        res.send('hey')
    }
}

module.exports = spursController