const mongoose = require("mongoose");
const mongoURI =
  "mongodb://gofood:Abhi08032003@ac-jzhoilm-shard-00-00.jcny2ll.mongodb.net:27017,ac-jzhoilm-shard-00-01.jcny2ll.mongodb.net:27017,ac-jzhoilm-shard-00-02.jcny2ll.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-df53ns-shard-0&authSource=admin&retryWrites=true&w=majority";

const MongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const catData = await foodCategory.find({}).toArray();
    //console.log(data);
    global.food_items = data;
    global.foodCategory = catData;
    //console.log(global.food_items)
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = MongoDB;
