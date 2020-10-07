import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface IIncome extends Document {
  owner: IUser;
  source: string;
  amount: number;
  frequency: string;
}

const IncomeSchema: Schema = new Schema({
  owner: { type: Object, required: true },
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: Number, required: true },
});

export default mongoose.model<IIncome>("Income", IncomeSchema);
