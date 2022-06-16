const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("../db");
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('../routes/auth');
const userRouter = require('../routes/users');  // userRouter is the name of the file (users.js)

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()) // for parsing application/json;
app.use(cors()); // allow all cross-origin requests

dbConnect(); // connect to the mongo db (db.js)

app.use(express.static(path.resolve(__dirname, '../client/build')));

  // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

// 404 url not found
app.use((req, res,next) =>{
  res.status(404).json({msg: '404 Not Found'});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

