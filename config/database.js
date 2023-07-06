import mongoose from "mongoose";

export const connectDB = async () => {
  
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Testy-Burger",
  });

  console.log(`Database is connect with ${connection.host}`);
};
