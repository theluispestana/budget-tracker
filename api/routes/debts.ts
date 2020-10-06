import express from "express";
import Debt from "../models/debt";

const debtsRouter = express.Router();

debtsRouter.get("/", (req, res, next) => {
  console.log("looking for users debts");
  Debt.find({ owner: req.body.owner })
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

debtsRouter.post("/", (req, res, next) => {
  console.log("creating debt");
  const debt = new Debt({
    owner: req.body.owner,
    name: req.body.name,
    amount: req.body.amount,
    interest: req.body.interest,
  });
  debt
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST request to /debts",
        createdDebt: debt,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default debtsRouter;
