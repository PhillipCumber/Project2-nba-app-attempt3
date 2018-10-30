let express = require('express')
let router = express.Router()
let teamController = require('../controllers/team')

router.get('/', teamController.index)

module.exports = router