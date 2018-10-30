let express = require('express')
let router = express.Router()
let teamController = require('../controllers/team')
let hawksController = require('../controllers/hawks')

////home page
router.get('/', teamController.index)

///hawks page
router.get('/hawks', hawksController.index)


module.exports = router