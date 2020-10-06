import express from "express";
import Income from "../models/income";

const incomeRouter = express.Router();

incomeRouter.get("/", (req, res, next) => {
  console.log("looking for users income");
  Income.find({ owner: req.body.owner })
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

incomeRouter.post("/", (req, res, next) => {
  console.log("creating debt");
  const income = new Income({
    owner: req.body.owner,
    source: req.body.source,
    amount: req.body.amount,
    frequency: req.body.frequency,
  });
  income
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST request to /income",
        createdIncome: income,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default incomeRouter;
