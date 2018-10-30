let express = require('express')
let router = express.Router()
let teamController = require('../controllers/team')
let hawksController = require('../controllers/hawks')
let lakersController = require('../controllers/lakers')


////home page
router.get('/', teamController.index)

///hawks page
router.get('/hawks', hawksController.index)

///lakers page
router.get('/lakers', lakersController.index)


module.exports = router