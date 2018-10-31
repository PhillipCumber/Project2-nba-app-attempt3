let express = require('express')
let Spurs = require('../models/Spurs')

let spursController = {

    index: (req,res) => {
        
        Spurs.find()
            .then((info) => {

                res.render('spurs/index', {spursHBS: info})
            })

    },

    new: (req, res) => {

        res.render('spurs/new')
    },

    show: (req, res) => {

        Spurs.findById(req.params.spursId)
            .then((info) => {

                res.render('spurs/show', {spursHBS: info})
            })
    },

    create: (req, res) => {

        Spurs.create(req.body)
            .then((newInfo) => {
                newInfo.save()
                res.redirect(`/spurs`)
            })
    },

    edit: (req, res) => {

        Knicks.findById(req.params.id)
            .then(info => {

                res.render('spurs/edit', {spursHBS: info})
            })

        res.redirect('/spurs')
    },

    update: (req, res) => {

        Spurs.findByIdAndUpdate(req.params.id, req.body)
            .then((updateInfo) => {

                res.redirect(`/spurs/${updateInfo._id}`)
            }) 
    },

    delete: (req, res) => {
        Spurs.findByIdAndRemove(req.params.spursId)
            .then(() => {
                res.redirect('/spurs')
        })
      }
}

module.exports = spursController