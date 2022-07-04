const router = require('express').Router();
const Room = require('../model/Room');
const User = require('../model/User');


// Create room
router.post('/create', async (req, res) => {
    try {
        const newRoom = new Room({  // create new room object
            name: req.body.name,
            description: req.body.description,
            user: [req.body.userId], // add userId to users array
            messages: [], // add empty messages array
        });
        const room = await newRoom.save(); // save room to database
        res.status(200).json(room); // return room to client side
    } catch (error) {
        res.status(500).json(error);
    }
}
);

// get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get room by id
router.get('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    }
    catch (error) {
        res.status(500).json(error);
    }

})


// get room by user id
router.get('/user/:id', async (req, res) => {
    try {
        const room = await Room.find({ user: req.params.id });
        res.status(200).json(room);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

// delete room
router.delete('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.user.includes(req.body.userId)) {
            await Room.findByIdAndDelete(req.params.id);
            res.status(200).json("Room deleted successfully");
        } else {
            res.status(401).json('Unauthorized user to delete this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// update room
router.put('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.user.includes(req.body.userId)) {
            await Room.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json("Room updated successfully");
        } else {
            res.status(401).json('Unauthorized user to update this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// add user to room
router.put('/addUser/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.user.includes(req.body.userId)) {
            await Room.findByIdAndUpdate(req.params.id, {
                $push: {
                    user: req.body.userId,
                },
            }, { new: true });
            res.status(200).json("User added to room successfully");
        } else {
            res.status(401).json('Unauthorized user to add this user to this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// remove user from room
router.put('/removeUser/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.user.includes(req.body.userId)) {
            await Room.findByIdAndUpdate(req.params.id, {
                $pull: {
                    user: req.body.userId,
                },
            }, { new: true });
            res.status(200).json("User removed from room successfully");
        } else {
            res.status(401).json('Unauthorized user to remove this user from this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// add message to room
router.put('/addMessage/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.user.includes(req.body.userId)) {
            await Room.findByIdAndUpdate(req.params.id, {
                $push: {
                    messages: req.body.message,
                },
            }, { new: true });
            res.status(200).json("Message added to room successfully");
        } else {
            res.status(401).json('Unauthorized user to add this message to this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// remove message from room
router.put('/removeMessage/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.user.includes(req.body.userId)) {
            await Room.findByIdAndUpdate(req.params.id, {
                $pull: {
                    messages: req.body.message,
                },
            }, { new: true });
            res.status(200).json("Message removed from room successfully");
        } else {
            res.status(401).json('Unauthorized user to remove this message from this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// get messages from room
router.get('/messages/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room.messages);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;