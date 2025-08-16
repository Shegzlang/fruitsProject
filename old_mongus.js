const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Define the schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// Create the model
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create the document
const apple = new Fruit({ name: "Apple", rating: 7, review: "Great fruit" });

// save to collection
// apple.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({ name: "John", age: 37 });
// person.save();

// Create multiple documents
const kiwi = new Fruit({ name: "Kiwi", rating: 10, review: "The best fruit" });
const orange = new Fruit({ name: "Orange", score: 6, review: "Kinda sour" });
const banana = new Fruit({ name: "Banana", score: 4, review: "Weird texture" });

Fruit.insertMany([kiwi, orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully saved all fruits to fruitsDB");
  }
});

// console.log("saved to DB!");
