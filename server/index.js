// server/index.js

const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ heading: "Home Based Automation Syatem Project", subheading: "Home Automation system consist of a servers and sensors. These servers are remote servers located on Internet which help you to manage and process the data without the need of personalised computers." });
  });


  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

