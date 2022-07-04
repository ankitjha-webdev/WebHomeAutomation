const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

// Register auth
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login auth
router.post('/login', async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        !user ? res.status(404).json({ message: 'User not found' }) : null; // if user not found return error message to client side (404) and stop the function execution

        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate ? res.status(401).json({ message: 'Invalid credentials' }) : null; // if password is not valid return error message to client side (401) and stop the function execution
       const {password, ...userWithoutPassword} = user._doc;
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;