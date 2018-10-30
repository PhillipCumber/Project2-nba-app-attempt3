let express = require('express')
let Lakers = require('../models/Lakers')

let lakersController = {

    index: (req, res) => {

        res.send('hey')
    }
}

module.exports = lakersController