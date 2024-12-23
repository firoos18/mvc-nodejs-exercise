import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./infrastructure/routes/UserRoute";
import postRoutes from "./infrastructure/routes/PostRoute";

const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://itsfiroos:lordfiroos18@mvc-nodejs-exercise.zxhin.mongodb.net/?retryWrites=true&w=majority&appName=MVC-NodeJS-Exercise"
);

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
