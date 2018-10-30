let express = require('express')
let Knicks = require('../models/Knicks')

let knicksController = {

    index: (req, res) => {

        res.send('hey')
    }
}

module.exports = knicksController