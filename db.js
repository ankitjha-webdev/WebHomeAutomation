const mongoose = require('mongoose');

// connect to the mongo db

const dbConnect = async () => {
    try {
        
        const connect = await mongoose.connect(process.env.MONGO_HOST_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() =>{
            console.log('MongoDB Connected Successfully ! ');
        }).catch((err) =>{
            console.error(`Error: ${err}`);
        })
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

module.exports = dbConnect;