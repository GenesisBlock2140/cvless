import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!, { dbName: "cvless" });
    mongoose.connection;
  } catch (error) {
    console.log(error);
  }
}
