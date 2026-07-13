const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "../../.env",
});

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb connected successfully!");
  } catch (error) {
    console.log(`MongoDb cannot be connected ${error.message}`);
    process.exit(1);
  }
};
module.exports = dbConnection;
