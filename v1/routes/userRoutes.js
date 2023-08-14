const router = require('express').Router();
const UserController = require('../controllers/userController');
const userSchema = require('../requestSchema/userSchema');

router.post('/register', userSchema.register, UserController.register);

module.exports = router;