require('dotenv')
const express = require('express')
const { join } =require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()
const { User } = require('./models')

app.use(express.static(join(__dirname, 'public')))
app,use(express.urlencoded({ extended: true }))
app.use(express.json())

// Initializes passport
app.use(passport.initialize())
// Sets up a new session for each user
// An individual instance of Passport that runs for every user
app.use(passport.session())

passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// JSON web token strategy
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
.populate('movies', 'games', 'songs', 'foods')
    .then(user => cb(null, user))
    .catch(err => console.error(er))))

app.use('./routes')

require('./config')
    .then(() => app.listen(3000))
    .catch(err => console.error(err))