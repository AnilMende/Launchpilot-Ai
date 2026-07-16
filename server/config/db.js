import mongoose from "mongoose";

const connectDB = async () => {

    try {

        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);

        console.log("Database Connected");

    } catch (error) {
        console.error("MongoDB Connection Failed");

        console.error(error.message);

        process.exit(1);
    }
}

export default connectDB;