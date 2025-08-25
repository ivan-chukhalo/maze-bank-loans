import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Sucessfull connection to MongoDB');
    } catch (error) {
        console.error(`Failed to connect to MongoDB: ${error.message}`);
        process.exit(1); // command to force exit Node application. 1 means exit with failure, 0 means success. `process` - global object in Node that represents the current Node process.
    }
}

export default connectDB;