import mongoose from 'mongoose';


import {NODE_ENV , MONGODB_URI} from '../config/env.js';
console.log(MONGODB_URI , "this is mongo");
if (!MONGODB_URI) {
    throw new Error('Please Define  MONGODB_URI environment variable inside .env.<development/production>.local');
}



const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`Database Connected to ${NODE_ENV} `);
        console.log('Node Version' ,  process.version);
    } catch (error) {
        console.log("Database connection failed ");
        process.exit(1);
    }
}

export default connectToDatabase;