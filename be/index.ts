import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import MoviesRouter from "./routes/movies.routes";
import CommentsRouter from "./routes/comments.routes";
// import TheaterRouter from "./routes/theater.routes";

const MONGO_CONN_STR = process.env.MONGODB_CONN_STR
  ? process.env.MONGODB_CONN_STR
  : "";
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use("/", MoviesRouter);
app.use("/comments", CommentsRouter);
// app.use("/theater", TheaterRouter);

app.listen(PORT, async () => {
  try {
    const connection = await mongoose.connect(MONGO_CONN_STR);
  } catch (error) {
    console.log("Mongoose connection aldaa garlaa");
  }
});
