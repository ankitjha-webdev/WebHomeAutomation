const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true 
    },
    profilePicture: {
        type: String,
        default: "",
    },  // default is empty string
    admin:{
        type: Boolean,
        default: false
    }
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);