const User = require('../model/User');
const bcrypt = require('bcrypt');
const router = require('express').Router();

// update user info
router.put('/:id', async (req, res) =>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true});
            res.status(200).json("User updated successfully"); // send back the updated user
        } catch (error) {
            res.status(500).json({ msg: error.message }); // 500 is the server error
        }

    } else {
        res.status(401).json({msg: 'Unauthorized user '}); // 401 unauthorized
    }   

})



module.exports = router;