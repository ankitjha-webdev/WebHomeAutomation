const router = require('express').Router();
const Room = require('../model/Room');
const User = require('../model/User');
const Devices = require('../model/Devices');


// Create device
router.post('/create', async (req, res) => {
    try {
        const newDevice = new Devices({  // create new device object
            name: req.body.name,
            description: req.body.description,
            state: req.body.state,
            room: req.body.roomId,
        });
        const device = await newDevice.save(); // save device to database
        res.status(200).json(device); // return device to client side
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all devices
router.get('/', async (req, res) => {
    try {
        const devices = await Devices.find();
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json(error);
    }

})

// get device by id
router.get('/:id', async (req, res) => {
    try {
        const device = await Devices.findById(req.params.id);
        res.status(200).json(device);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

// get device by room id

router.get('/room/:id', async (req, res) => {
    try {
        const device = await Devices.find({ room: req.params.id });
        res.status(200).json(device);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

// delete device
router.delete('/:id', async (req, res) => {
    try {
        const device = await Devices.findById(req.params.id);
        await device.remove();
        res.status(200).json({ message: 'Device removed' });
    }
    catch (error) {
        res.status(500).json(error);
    }
})

// update device

router.put('/:id', async (req, res) => {
    try {
        const device = await Devices.findById(req.params.id);
        device.name = req.body.name;
        device.description = req.body.description;
        device.state = req.body.state;
        device.room = req.body.roomId;
        await device.save();
        res.status(200).json(device);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

// get device by user id
router.get('/user/:id', async (req, res) => {
    try {
        const device = await Devices.find({ user: req.params.id });
        res.status(200).json(device);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;