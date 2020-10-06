import express from "express";
import mongoose from "mongoose";
import usersRouter from "../api/routes/users";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.port || 3000;

const uri = `mongodb+srv://budget-tracker-api:${process.env.MONGO_ATLAS_PW}@cluster0.12gli.mongodb.net/budget_tracker_api?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World test");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

app.use("/users", usersRouter);
