const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    username: {
        type: String,
        required: true
    },
    Device: [
        {
            devname: {
                type: String,
                required: true
            },
            devdescription: {
                type: String,
                required: true
            },
            state: {
                type: Boolean,
                // required: true
            },
        }

    ]
}, { timestamps: true });

module.exports = mongoose.model('Room', RoomSchema);