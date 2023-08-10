import mongoose from "mongoose";
import {config} from "dotenv";
config({
  path:"./data/config.env"
})
//connecting database
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => {
      console.log(e);
    });
};
