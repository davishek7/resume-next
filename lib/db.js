import mongoose from "mongoose";
import { MONGO_URL, MONGO_DB_NAME } from "@/constants/db.constant";

export async function connectDB() {
    if (mongoose.connection.readyState >=1) return;
    await mongoose.connect(MONGO_URL, {
        dbName: MONGO_DB_NAME
    })
}