let express = require('express')
let Hawks = require('../models/Hawks')

let hawksController = {

    index: (req,res) => {
        
        Hawks.find()
            .then((info) => {

                res.render('hawks/index', {hawksHBS: info})
            })

    },

    new: (req, res) => {

        res.render('hawks/new')
    },

    show: (req, res) => {

        
    }
}

module.exports = hawksController