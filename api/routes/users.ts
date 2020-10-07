import express from "express";
import User from "../models/user";

const usersRouter = express.Router();

usersRouter.get("/:email", (req, res, next) => {
  console.log("searching for user");
  // User.findById(req.params.id)
  User.find({ email: req.params.email })
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
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default usersRouter;
