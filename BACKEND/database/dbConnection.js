import mongoose from "mongoose";
import { MONGO_URI } from "../config/config.js";


export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
        dbName: "RESERVATIONS",
      })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting to database ${err}`);
    });
};
