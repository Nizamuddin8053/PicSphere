import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "pinsphere",
    });

    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
