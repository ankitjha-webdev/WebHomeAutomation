var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:user@cluster0.8lypi.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
