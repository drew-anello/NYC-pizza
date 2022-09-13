// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const app = express()
const pizzaTime = require('./models/pizza')
const pizzaController = require('./controllers/pizza')
require('dotenv').config()
const PORT = process.env.PORT || 3000
let DATABASE_URI= process.env.DATABASE_URI

app.set('view engine', 'ejs')

// database config
mongoose.connect(DATABASE_URI)
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

// mount middleware
app.use(express.urlencoded({ extended: false })); //  access to req.body
app.use(methodOverride('_method')) // allows methods besides get and post
app.use(express.static('stylessheet'))  // use folder for CSS

app.use('/pizzaTime', pizzaController)
// Index
app.get('/', (req,res) => {
    res.render('index.ejs')
})
// New
app.get('/pizza/new', (req, res) => {
    res.render('pizza/new.ejs')
})


// Delete

// Update

// Create


// Edit
app.get('/addshop', (req, res) => {
    res.render('pizza/edit.ejs')
})

// Show


// listener
app.listen(PORT, () => {
    console.log('happy birthday mr president')
})
