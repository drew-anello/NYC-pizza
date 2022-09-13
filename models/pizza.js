const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema
const pizzaSchema = new Schema({
    name: String
}, {
    adress: String
}, {
    borough: String
}, {
    review: [String]
}, {
    rating: Number
}
)
const pizzaTime = mongoose.model('Pizza', pizzaSchema)
module.exports = pizzaTime