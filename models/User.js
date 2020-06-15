const { model, Schema } = require('mongoose')

const User = new Schema({
    name: String,
    email: String,
    username: String,
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    foods: [{
        type: Schema.Types.ObjectId,
        ref: 'Food'
    }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)