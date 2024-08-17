import { Document, Schema, Types, model } from "mongoose";
import ISpecialtie from "../dtos/specialtie.dto";
const schema = new Schema<ISpecialtie>({
  name: { type: String, required: true },
});
export const Specialtie = model("Specialtie", schema);
