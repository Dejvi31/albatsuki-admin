import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Already connected to DB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI || "", {
      dbName: "Albatsuki_Admin",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
