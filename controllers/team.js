let express = require('express')
let team = require('../models/Team')

let teamController = {

    index: (req, res) => {

        team.find()
            .then((team) => {

                res.render('team/index', {teamHBS: team})
            })
    }
}

module.exports = teamController