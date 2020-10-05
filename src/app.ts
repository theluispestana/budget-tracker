import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.port || 3000;

mongoose.connect(
  "mongodb+srv://budget-tracker-api:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0.12gli.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useMongoClient: true,
  }
);

app.get("/", (req, res) => {
  res.send("Hello World test");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
