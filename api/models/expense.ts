import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface IExpense extends Document {
  owner: IUser["_id"];
  name: String;
  amount: Number;
  frequency: String;
}

const ExpenseSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: Number, required: true },
});

export default mongoose.model<IExpense>("Expense", ExpenseSchema);
