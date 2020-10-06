import express from "express";
import User from "../models/user";

const usersRouter = express.Router();

usersRouter.get("/:id", (req, res, next) => {
  console.log("searching for user");
});

usersRouter.post("/", (req, res, next) => {
  console.log("attempting to create user and show request", req.body);
  const user = new User({
    email: req.body.email,
    name: req.body.name,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
});

export default usersRouter;
