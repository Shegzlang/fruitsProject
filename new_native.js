// new mongo
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("connected successfully to mongoDB");

    const db = client.db("fruitsDB");
    const collection = db.collection("fruits");

    // Insert multiple fruits
    // await collection.insertMany([
    //   { name: "Apple", score: 8, review: "Great fruit" },
    //   { name: "Orange", score: 6, review: "Kinda sour" },
    //   { name: "Banana", score: 9, review: "Great stuff!" },
    // ]);

    // // Find all documents
    // const results = await collection.find({}).toArray();
    // console.log("All fruits:", results);
    // // console.log("inserted 3 documents into the collection");
  } catch (err) {
    console.error("connection error:", err);
  } finally {
    await client.close();
  }
}

run();
