const router = require('express').Router()
const { Movie, User } = require('../models')
const passport = require('passport')

router.get('/movies', (req, res) => {
    Movie.find()
        .populate('author')
        .then(posts => res.json(movies))
        .catch(err => console.error(err))
})

router.post('/movies', passport.authenticate('jwt'), (req, res) => {
    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        author: req.body.author
    })
})