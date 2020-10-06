import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface IIncome extends Document {
  owner: IUser["_id"];
  source: String;
  amount: Number;
  frequency: String;
}

const IncomeSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, required: true },
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: Number, required: true },
});

export default mongoose.model<IIncome>("Income", IncomeSchema);
