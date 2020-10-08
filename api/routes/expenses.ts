import express from "express";
import Expense from "../models/expense";

const expenseRouter = express.Router();

expenseRouter.get("/:id", (req, res, next) => {
  console.log("looking for users expenses");
  Expense.find({ "owner._id": req.params.id })
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

expenseRouter.post("/", (req, res, next) => {
  console.log("creating expense");
  const expense = new Expense({
    owner: req.body.owner,
    name: req.body.name,
    amount: req.body.amount,
    frequency: req.body.frequency,
  });
  expense
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST request to /expense",
        createdExpense: expense,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default expenseRouter;
