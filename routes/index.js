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
// router.get('/hawks/:hawksId/edit', hawksController.edit)
router.get('/hawks/:hawksId', hawksController.show)
router.patch('/hawks/:hawksId', hawksController.update)
router.delete('/hawks/:hawksId', hawksController.delete)


///lakers page
router.get('/lakers', lakersController.index)
router.get('/lakers', knicksController.index)
router.get('/lakers/new', knicksController.new)
router.post('/lakers', knicksController.create)
router.get('/lakers/:lakersId', knicksController.show)
router.patch('/lakers/:lakersId', knicksController.update)
router.delete('/lakers/:lakersId', knicksController.delete)

///knicks page
router.get('/knicks', knicksController.index)
router.get('/knicks/new', knicksController.new)
router.post('/knicks', knicksController.create)
router.get('/knicks/:knicksId', knicksController.show)
router.patch('/knicks/:knicksId', knicksController.update)
router.delete('/knicks/:knicksId', knicksController.delete)

///spurs page
router.get('/spurs', spursController.index)
router.get('/spurs/new', spursController.new)
router.post('/spurs', spursController.create)
router.get('/spurs/:spursId', spursController.show)
router.patch('/spurs/:spursId', spursController.update)
router.delete('/spurs/:spursId', spursController.delete)


module.exports = router