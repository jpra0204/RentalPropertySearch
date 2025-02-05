import mongoose from "mongoose";

let connected = false;

/**
 * Reminder: all Mongoose calls are async
 * 
 * strictQuery: true -> to ensure that only fields that are specified in our schema will be 
 * saved into the database
 */
const connectDB = async () => {
    console.log("hello")
    mongoose.set("strictQuery", true)
    console.log("hello 2")

    // Ensure connection only once
    if(connected) {
        console.log("hello connected")
        console.log("MongoDB is connected");
        return;
    }

    console.log("hello 3")
    // Connect to MongoDB
    try {
        console.log("hello try")
        let connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(connection)
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;