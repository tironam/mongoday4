const router = require('express').Router()
const { User } =require('./models')
const jwt = require('jsonwebtoken')

// Register route to create new user
router.post('/users/register', (req, res) => {
    const { name, email, username } = req.body
    User.register(new User({ name, email, username }), req.body.password, err => {  
    if (err) { console.error(err) }
    res.sendStatus(200)
    })
})

// Login route to verify user
router.post('/users/login', (req, res) => {
    User.authenticate()(req.body.username, req.body.password, (err, user) => {
        if (err) { console.error(err) }
        res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : NULL)
    })
})

// router.get('/users/:id', (req, res) => {
//     User.findById(req.params.id)
//     .populate('movies', 'games', 'foods', 'songs')
//     .then(user => res.json(user))
//     .catch(err => console.error(err))
// })