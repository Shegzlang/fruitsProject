const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// connection url
const url = "mongodb://localhost:27017";

// database name
const dbName = "fruitsDB";

// create new mongo client
const client = new MongoClient(url);

// use connect method to connect to the server
client.connect(function (err) {
  if (err) {
    console.error("Connection failed:", err);
    return;
  }

  assert.strictEqual(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Do something useful here, like insert or find documents

  client.close(() => {
    console.log("Connection closed.");
  });

  //   insertDocuments(db, function () {
  //     client.close();
  //   });
});

// const insertDocuments = function (db, callback) {
//   const collection = db.collection("fruits");

//   collection.insertMany(
//     [
//       { name: "Apple", score: 8, review: "Great fruit" },
//       { name: "Orange", score: 6, review: "Kinda sour" },
//       { name: "Banana", score: 9, review: "Great stuff!" },
//     ],
//     function (err, result) {
//       assert.strictEqual(err, null);
//       assert.strictEqual(3, result.insertedCount);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     }
//   );
// };
