const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

const app = express();
dotenv.config();

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://user:user@cluster0.8lypi.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log(collection);
//   client.close();
// });
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ heading: "Home Based Automation Syatem Project", subheading: "Home Automation system consist of a servers and sensors. These servers are remote servers located on Internet which help you to manage and process the data without the need of personalised computers." });
  });


  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});



// connect mongodb
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('MongoDB connected with ${process.env.MONGO}');
  } catch (error) {
    throw(error);
  }
};

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
}
);
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
}
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

