let express = require('express')
let router = express.Router()
let teamController = require('../controllers/team')
let hawksController = require('../controllers/hawks')
let lakersController = require('../controllers/lakers')
let knicksController = require('../controllers/knicks')
let spursController = require('../controllers/spurs')

////home page
router.get('/', teamController.index)

///hawks page
router.get('/hawks', hawksController.index)
// router.get('/hawks/:id', hawksController.show)
router.post('/hawks', hawksController.create)


///lakers page
router.get('/lakers', lakersController.index)

///knicks page
router.get('/knicks', knicksController.index)

///spurs page
router.get('/spurs', spursController.index)



module.exports = router