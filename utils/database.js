 import mongoose from "mongoose";
 let isConnected = false;

 export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Promptstore",
        }) 
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);        
    }
 }

 export default connectToDB();