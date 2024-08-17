import { Schema, Types, model, Document } from "mongoose";
import { IDoctor } from "../dtos/doctor.dto";
const doctorSchema = new Schema<IDoctor>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: /\w@\w.\w/gi },
  specialtyId: {
    type: String,
    ref: "Specialty",
  },
  address: { type: String, required: true },
  phoneNumber: { type: String },
  password: { type: String, minlength: 6 },
  image: { type: String },
});

export const Doctor = model("Doctor", doctorSchema);
