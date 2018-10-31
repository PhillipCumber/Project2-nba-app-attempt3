let express = require('express')
let Lakers = require('../models/Lakers')

let lakersController = {

    index: (req,res) => {
        
        Lakers.find()
            .then((info) => {

                res.render('lakers/index', {lakersHBS: info})
            })

    },

    new: (req, res) => {

        res.render('lakers/new')
    },

    show: (req, res) => {

        Lakers.findById(req.params.lakersId)
            .then((info) => {

                res.render('lakers/show', {lakersHBS: info})
            })
    },

    create: (req, res) => {

        Lakers.create(req.body)
            .then((newInfo) => {
                newInfo.save()
                res.redirect(`/lakers`)
            })
    },

    edit: (req, res) => {

        Lakers.findById(req.params.lakersId)
            .then(info => {

                res.render('lakers/edit', {lakersHBS: info})
            })

        res.redirect('/lakers')
    },

    update: (req, res) => {

        Lakers.findByIdAndUpdate(req.params.id, req.body)
            .then((updateInfo) => {

                res.redirect(`/lakers/${updateInfo._id}`)
            }) 
    },

    delete: (req, res) => {
        Lakers.findByIdAndRemove(req.params.LakersId)
            .then(() => {
                res.redirect('/lakers')
        })
      }
}

module.exports = lakersController