const mongoose = require('mongoose');
const env = require('dotenv');
env.config()

const connectDB = async () => {

  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@scribbler-l1zim.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message)
    // exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;