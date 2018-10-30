let express = require('express')
let team = require('../models/Team')

let teamController = {

    index: (req, res) => {

        res.send('hey there')
    }
}

module.exports = teamController