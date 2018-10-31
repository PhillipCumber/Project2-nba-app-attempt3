let express = require('express')
let Knicks = require('../models/Knicks')

let knicksController = {

    index: (req,res) => {
        
        Knicks.find()
            .then((info) => {

                res.render('knicks/index', {knicksHBS: info})
            })

    },

    new: (req, res) => {

        res.render('knicks/new')
    },

    show: (req, res) => {

        Knicks.findById(req.params.knicksId)
            .then((info) => {

                res.render('knicks/show', {knicksHBS: info})
            })
    },

    create: (req, res) => {

        Knicks.create(req.body)
            .then((newInfo) => {
                newInfo.save()
                res.redirect(`/knicks`)
            })
    },

    edit: (req, res) => {

        Knicks.findById(req.params.id)
            .then(info => {

                res.render('knicks/edit', {knicksHBS: info})
            })

        res.redirect('/knicks')
    },

    update: (req, res) => {

        Knicks.findByIdAndUpdate(req.params.id, req.body)
            .then((updateInfo) => {

                res.redirect(`/knicks/${updateInfo._id}`)
            }) 
    },

    delete: (req, res) => {
        Knicks.findByIdAndRemove(req.params.knicksId)
            .then(() => {
                res.redirect('/knicks')
        })
      }
}

module.exports = knicksController