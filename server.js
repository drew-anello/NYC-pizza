 // Dependencies
const express = require('express');
 const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const PizzaTime = require('./models/pizza')
// // const pizzaController = require('./controllers/pizza')
require('dotenv').config()

    
let DATABASE_URL= process.env.DATABASE_URL

app.set('view engine', 'ejs')

// // database config
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

// // mount middleware
app.use(express.urlencoded({ extended: false })); //  access to req.body
app.use(methodOverride('_method')) // allows methods besides get and post
app.use(express.static('public'))  // use folder for CSS

// // app.use('/PizzaTime', pizzaController)

// landing page

app.get('/', (req, res) => {
    res.render('landing.ejs')
})

// // Index
app.get('/pizza', (req, res) => {
    PizzaTime.find({}, (error, allPizzas) => {
        res.render('index.ejs', {
            allPizzas
        })
    })
})

// app.get('/pizza', (req,res) => {
//     PizzaTime.find({}, (error, allPizza) => {
//         res.render('index.ejs', {
//             pizza: allPizza,
//         });
//     });
// })
// // New
app.get('/pizza/new', (req, res) => {
    res.render('new.ejs')
    
})


// Delete
app.post("/pizza/:id/delete", (req, res) => {
    PizzaTime.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect("/pizza")
    })
});

// // Update
app.put("/pizza/:id", (req, res) => {

    PizzaTime.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedPizza) => {
            res.redirect(`/pizza/${req.params.id}`)
        }
    )
});

// // Create
app.post('/pizza', (req, res) => {
    PizzaTime.create(req.body, (error, createdPizzaTime) => {
        res.redirect('/pizza')
  })
})
// app.post("/", (req, res) => {
//     PizzaTime.create(req.body, (error, createdPizza) => {
//         console.log(req.body)
//         res.redirect("/pizza");
//     });
// })


// // Edit
app.get("/pizza/:id/edit", (req, res) => {
    PizzaTime.findById(req.params.id, (err, data) => {
        res.render("edit.ejs", {pizza : data})

    })
});

// // Show
app.get('/pizza/:id', (req, res) => {
    PizzaTime.findById(req.params.id, (err, foundPizzaTime) => {
        res.render('show.ejs', {
            pizza: foundPizzaTime
        })
    })
})


// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('happy birthday mr president')
})

