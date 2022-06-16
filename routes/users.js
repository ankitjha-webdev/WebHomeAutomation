const User = require('../model/User');
const bcrypt = require ('bcrypt');
const router = require('express').Router();
const bodyParser = require('body-parser');


// find user by email
router.get('/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) return res.status(400).json({ msg: 'User does not exist with this' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
);

// get all
router.get('/', async (req, res) => {
    try {
        const users  = await User.find();
        const {password, ...withoutPassword} = users[0]._doc; 
        res.status(200).json(withoutPassword);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// @route   POST api/users/:id
// @desc    Update a user
// @access  Private
// update user info
router.put('/:id', async  (req, res) => {
    User.findById(req.params.id, async (err, user) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            
            if (req.body.name) {
                user.name = req.body.name;
            }
            if (req.body.email) {
                user.email = req.body.email;
            }
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(req.body.password, salt);
            }
            if (req.body.profilePicture) {
                user.profilePicture = req.body.profilePicture;
            }
            user.save((err, user) => {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                } else {
                    res.status(200).json({
                        user: user
                    });
                }
            });
        }
    });

})

// delete user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json( " User deleted sucessfully " );
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }

})



module.exports = router;