const mongoose = require("mongoose");

run().catch((err) => console.log(err));

// Define the schema; validator put in rating
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Create the model
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create a document
const apple = new Fruit({ name: "Apple", rating: 34, review: "Great fruit" });
const peach = new Fruit({
  name: "Peach",
  rating: 10,
  review: "Peaches are so yummy!",
});
const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Greater fruit",
});
const pear = new Fruit({
  name: "Pear",
  rating: 8,
  review: "Super healthy",
});

// Create another document all over (add fruitschema for relation)
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});
const Person = mongoose.model("Person", personSchema);

const person = new Person({ name: "John", age: 37 });
const pers2 = new Person({ name: "Amy", age: 12, favoriteFruit: pineapple });

// CREATE multiple document using fruitSchema
multipleFruits = [
  { name: "Kiwi", rating: 10, review: "The best fruit" },
  { name: "Orange", rating: 6, review: "Kinda sour" },
  { name: "Banana", rating: 4, review: "Weird texture" },
];

async function run() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
  console.log("connected successfully to MongoDB via Mongoose");

  // save to collection
  await pear.save();
  // await pers2.save();
  // await Fruit.insertMany(multipleFruits);
  // console.log("all saved to DB!");

  // READ: Find all documents (living js object: used with dot notation)
  const results = await Fruit.find();

  // UPDATE the peach document or any
  // await Fruit.updateOne(
  //   { _id: "687771e4a43e5a8d0ec29972" },
  //   { review: "Can't say haven't had it before!" }
  // );
  // await Fruit.updateOne({ _id: "687759528a58bed9f70e8ccd" }, { rating: 4 });
  await Person.updateOne({ name: "John" }, { favoriteFruit: pear });

  // DELETE the peach document or many
  // await Fruit.deleteOne({ _id: "687771e4a43e5a8d0ec29972" });
  // await Person.deleteMany({ name: "John" });
  // console.log("deleted successfully:", await Person.find());

  console.log("All fruits:");
  await mongoose.connection.close(); // only when you are done working
  // console.log("All fruits:", results);
  results.forEach(function (result) {
    // console.log(result.name);
  });
}
