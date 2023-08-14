const express = require('express')
const router = express.Router()
const { getClients, getClient } = require('../controllers/clients.Controller')

router.get("/clients", getClients)
router.get("/client/:id", getClient)


module.exports = router