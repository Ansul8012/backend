import mongoose from "mongoose";

import {DB_NAME} from "../constants.js"

const ConnectDB=async ()=>{
    try {
        const connectInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED !!! DB HOST: ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB is Connected",error);
        process.exit(1);
    }
}

export default ConnectDB;