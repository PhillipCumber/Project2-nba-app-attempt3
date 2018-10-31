let express = require('express')
let Hawks = require('../models/Hawks')

let hawksController = {

    index: (req,res) => {
        
        Hawks.find()
            .then((info) => {

                res.render('hawks/index', {hawksHBS: info})
            })

    },

    show: (req, res) => {

        let info = new Hawks({

            name: req.body.name,
            address:req.body.number,
            salary: req.body.team
        });

    }
}

module.exports = hawksController