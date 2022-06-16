const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

// @route   POST api/auth/register
// @desc    Register a user
// @access  Public
router.post('/register', async (req, res) => {
    try {
    // Check if user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ msg: 'User already exists' });
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // // Create a new user
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
    });
    
    // Save user
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
    
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})

// @route   POST api/auth/login
// @desc    Login a user
// @access  Public

router.post('/login', async (req, res) => {
    try {
        // Check if user exists
        const user = await User.findOne({ email: req.body.email});
        if (!user) return res.status(400).json({ msg: 'User does not exist' }); // if user does not exist, return error
        
        // Check if password is correct
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) return res.status(400).json({msg: 'Incorrect password'});

        const { password, ...userWithoutPassword} = user._doc;
        res.status(200).json(userWithoutPassword);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})

module.exports = router;