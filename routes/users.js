const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

// Update user

router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json("User updated successfully");
        } catch (error) {
           res.status(500).send(error);
        } 
    } else {
        res.status(401).json('Unauthorized user to update this user profile');
    }

     
})

// delete user
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id);   
        try {
            await Post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(404).send("User not found");
    }
        
    }else{
        res.status(401).json('Unauthorized user to delete this user profile');
    }
})

// get user
router.get('/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const {password, ...withoutPassword} = user._doc;
        res.status(200).json(withoutPassword);
    } catch (error) {
        res.status(500).json(error + "User not found at this id " + req.params.id);
    }
})

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    } 
}
)
// router.get('/', async function(req, res) {
//     User.find({}, function(err, Users){
//       if (err)
//           return done(err);
  
//       if (Users) {
//         console.log("Users count : " + user.length);
//         res.status(200).json(Users);
//       }
//     });
//   });


module.exports = router;