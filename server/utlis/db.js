const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error in connection: ${error.message}`);
    process.exit(0); // stop the app if DB connection fails
  }
};

module.exports = connectDB;
