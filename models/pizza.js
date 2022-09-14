const mongoose = require('mongoose')

const Schema = mongoose.Schema
const pizzaSchema = new Schema ({
	name: { type: String, required: true },
	address: { type: String, required: true },
	borough: { type: String, required: true },
	review: { type: [String], required: true },
	rating: { type: Number, min: 0, max: 10, required: true },

})
const PizzaTime = mongoose.model('PizzaTime', pizzaSchema)
module.exports = PizzaTime