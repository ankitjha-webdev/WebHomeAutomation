const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String, 
        default: '',
    },
    admin: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
}); // timestamps: true adds createdAt and updatedAt fields to the schema
    
module.exports = mongoose.model('User', userSchema);