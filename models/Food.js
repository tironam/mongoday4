const {model, Schema } = require('mongoose')

const Food = new Schema({
    name: String,
    cuisine: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Food', Food)