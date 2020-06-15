const { model, Schema } = require('mongoose')

const Movie = new Schema({
    name: String,
    genre: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
})

module.exports = model('Movie', Movie)