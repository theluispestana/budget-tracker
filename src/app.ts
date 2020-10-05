import express from "express";
const app = express();
const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World test");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
