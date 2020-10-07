import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface IExpense extends Document {
  owner: IUser;
  name: string;
  amount: number;
  frequency: string;
}

const ExpenseSchema: Schema = new Schema({
  owner: { type: Object, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: Number, required: true },
});

export default mongoose.model<IExpense>("Expense", ExpenseSchema);
