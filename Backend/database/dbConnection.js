import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../config/config.env" });
export const dbconnection = () => {

    mongoose.connect(process.env.MONGO_URL,{
        dbName : "Hospital_Management_System_MERN",
    }).then(()=>{
        console.log("connected to database!");
    }).catch(err=>{
        console.log(`Some error occurred while connecting to the database: ${err}`);
    });
}; 

export default dbconnection;
