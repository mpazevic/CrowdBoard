const express = require('express')
const viewController = require('../controllers/viewController.js')

const router = express.Router()

module.exports = router
  .get('*', viewController.index)
