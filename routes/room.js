const router = require('express').Router();
const Room = require('../model/Room');
const User = require('../model/User');


// Create room
router.post('/create', async (req, res) => {
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);
    } catch (error) {
        res.status(500).send(error);
    }
}
);

// update room
router.put('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.username === req.body.username) {
            try {
                const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updatedRoom);
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.status(401).send('You are not authorized to update this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// patch room device status to on/off
router.patch('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.username === req.body.username) {
            try {
                const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updatedRoom);
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.status(401).send('You are not authorized to update this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
)



// patch room
router.patch('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.username === req.body.username) {
            try {
                const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updatedRoom);
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.status(401).send('You are not authorized to update this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete room

router.delete('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (room.username === req.body.username) {
            try {
                const deletedRoom = await Room.findByIdAndDelete(req.params.id);
                res.status(200).json(deletedRoom);
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.status(401).send('You are not authorized to delete this room');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// get room

router.get('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all rooms
router.get('/', async (req, res) => {
    const username = req.query.user;
    const device = req.query.device;
    try {
        let rooms;
        if (username) {
            rooms = await Room.find({ username });
        } else if (device) {
            rooms = await Room.find({
                Device: {
                    $in: [device],
                }
            });

        } else {
            rooms = await Room.find();
        }

        res.status(200).json(rooms);
    } catch (error) {

    }
});

// get all rooms for user
router.get('/user/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const rooms = await Room.find({ username });
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json(error);
    }
}
);

// get all room's devices by id
router.get('/devices/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const room = await Room.findById(id);
        res.status(200).json(room.Device);
    } catch (error) {
        res.status(500).json(error);
    }
}
);



module.exports = router;