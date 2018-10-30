let express = require('express')
let team = require('../models/Team')

let teamController = {

    index: (req, res) => {

        res.send('hey')
    //     team.find()
    //         .then((team) => {

    //             res.render('team/index', {teamHBS: team})
    //         })
    // }
}

module.exports = teamController