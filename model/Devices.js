const mongoose = require('mongoose');


const DeviceSchema = new mongoose.Schema({ 

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    }

},{timestamps: true});