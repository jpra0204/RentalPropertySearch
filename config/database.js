import mongoose from "mongoose";

let connected = false;

/**
 * Reminder: all Mongoose calls are async
 * 
 * strictQuery: true -> to ensure that only fields that are specified in our schema will be 
 * saved into the database
 */
const connectDB = async () => {
    mongoose.set("strictQuery", true)

    // Ensure connection only once
    if(connected) {
        console.log("MongoDB is connected");
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;