const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    fan:{
        type: Boolean,
        default: false
    },
    heater:{
        type: Boolean,
        default: false
    },
    
    light:{
        type: Boolean,
        default: false
    },
    temperature:{
        type: Number,
        default: 0
    },
    humidity:{
        type: Number,
        default: 0
    },
    ac:{
        type: Boolean,
        default: false
    },
},{timestamps: true});

module.exports = mongoose.model('Status', statusSchema);