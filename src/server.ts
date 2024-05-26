import express, { Express } from "express";
import { connectDB } from "./config/database";
import apiRouter from "./routes";

connectDB();

const app: Express = express();

app.use(express.json());
app.disable("x-powered-by");


app.use("/api/v1", apiRouter);

export default app;
