
const express = require('express')
const { Signup, Signin, signout, requireSignin } = require('../controller/user')
const { runValidation } = require('../validator')
const { userSignUpValidator, userSiginValidator } = require('../validator/auth')
const router = express.Router()

router.post('/signup', userSignUpValidator, runValidation, Signup);
router.post('/singin', userSiginValidator, runValidation, Signin)
router.get('/signout', signout)

//test 
router.get('/test', requireSignin, (req, res) => {
    res.json({ message: 'You are get Secret key' })
})

module.exports = router