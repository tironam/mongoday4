const { model, Schema } = require('mongoose')

const Game = new Schema({
    title: String,
    genre: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Game', Game)