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
router.get('/hawks/new', hawksController.new)
router.post('/hawks', hawksController.create)
router.get('/hawks/:hawksId', hawksController.show)
// router.get('/:id/edit', hawksController.edit)
router.patch('/hawks/:hawksId', hawksController.update)
router.delete('/hawks/:hawksId', hawksController.delete)


///lakers page
router.get('/lakers', lakersController.index)

///knicks page
router.get('/knicks', knicksController.index)

///spurs page
router.get('/spurs', spursController.index)



module.exports = router