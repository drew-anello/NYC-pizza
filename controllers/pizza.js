const express = require('express')
const router = express.Router()
const pizzaTime = require ('../models/pizza')

router.get('/', (req, res) => {
    pizzaTime.find({}, (error, ))
})