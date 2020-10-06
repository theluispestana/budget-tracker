import express from "express";
import User from "../models/user";

const usersRouter = express.Router();

usersRouter.get("/:id", (req, res, next) => {
  console.log("searching for user");
  User.findById(req.params.id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
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
  res.status(201).json({
    message: "Handling POST requests to /users",
    createdUser: user,
  });
});

export default usersRouter;
