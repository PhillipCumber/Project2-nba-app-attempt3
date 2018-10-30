let express = require('express')
let Hawks = require('../models/Hawks')

let hawksController = {

    index: (req,res) => {
        
        res.send('hey')

    }
}

module.exports = hawksController