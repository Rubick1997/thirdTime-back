import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";
import swaggerDocs from "./swagger.js";
import dotenv from "dotenv";
dotenv.config();

const { DB_URL, PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("static"));
app.use("/api/v1", router);
console.log();
const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`server started on PORT ${PORT}`);
      swaggerDocs(app, PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
