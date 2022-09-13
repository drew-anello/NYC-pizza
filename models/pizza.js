const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema
const pizzaSchema = new Schema ({
	name: { type: String, required: true },
	adress: { type: String, required: true },
	borough: { type: String, required: true },
	review: { type: [String], required: true },
	score: { type: Number, min: 0.1, max: 10.0, required: true },

})
const pizzaTime = mongoose.model('Pizza', pizzaSchema)
module.exports = pizzaTime