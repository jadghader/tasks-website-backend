const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.index)
router.post('/add',TaskController.add)
router.post('/update',TaskController.update)

module.exports = router