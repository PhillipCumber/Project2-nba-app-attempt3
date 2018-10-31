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

        Hawks.findById(req.params.id)
            .then((info) => {

                res.render('hawks/show', {hawksHBS: info})
            })
    },

    create: (req, res) => {

        Hawks.create(req.body)
            .then((newInfo) => {

                res.redirect(`/${newInfo._id}`)
            })
    },

    edit: (req, res) => {

        Hawks.findById(req.params.id)
            .then(info => {

                res.render('hawks/edit', {hawksHBS: info})
            })
    },

    update: (req, res) => {

        Hawks.findByIdAndUpdate(req.params.id, req.body)
            .then((updateInfo) => {

                res.redirect(`/hawks/${updatedInfo._id}`)
            }) 
    },

    delete: (req, res) => {

        Hawks.findByIdAndRemove(req.params.id)
            .then(() => {
            
                res.redirect('/hawks')
        })
      }
    }


module.exports = hawksController