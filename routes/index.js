let express = require('express')
let router = express.Router()
let teamController = require('../controller/team')

router.get('/', teamController.index)

module.exports = router