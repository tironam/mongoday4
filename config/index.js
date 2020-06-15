module.exports = require('mongoose').connext('mongodb://localhost/favoritedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})