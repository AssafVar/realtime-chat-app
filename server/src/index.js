import express from "express";
import "dotenv/config";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import mongoose from "mongoose"

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.json());
app.use("/", userRoutes);

mongoose.connect(MONGO_URL)
.then((results)=>console.log("Connected to mongodb"))
.catch((err)=> console.log(err));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
