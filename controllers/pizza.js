const { Router } = require('express')
const express = require('express')
const router = express.Router()
const pizzaTime = require ('../models/pizza')

// I
router.get('/', (req, res) => {
    pizzaTime.find({}, (error, allPizza ) => {
        res.render('index.ejs')
    })
})
module.exports=Router

// N
// D
// U
// C
// E
// S
