// Dependencies
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000;


// Index
app.get('/', (req,res) => {
    res.render('index.ejs')
})
// New

// Delete

// Update

// Create

// Edit

// Show

// listener

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log('happy birthday mr president')
})
