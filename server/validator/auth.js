const { check } = require('express-validator')
exports.userSignUpValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
    check('email')

    .isEmail()
    .withMessage('Must be a valid email address '),
    check('password')
    .isLength({ min: 6 })

    .withMessage('Password must be at least 6 characters')

]

exports.userSiginValidator = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address '),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
]
exports.ForgetPasswordValidator = [
    check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Must be a valid email address '),
]
exports.ResetPasswordValidator = [
    check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Must be a valid email address '),
]