const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('users.ejs')
})

router.get('/:id', (req, res) => {
    // req.params.id
    res.send(`get users with id ${req.params.id}`)
})

module.exports = router