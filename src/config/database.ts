import mongoose from "mongoose";
import { DATABASE_URL } from "../utils/constants";
import { exit } from "process";

export const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(DATABASE_URL);
		const url = `${connection.host}:${connection.port}`;
		console.log(`MongoDB conectado en : ${url}`);
	} catch (error) {
		console.log("Error al conectar a MongoDB");
		exit(1);
	}
};
