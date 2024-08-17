import { Document, Types } from "mongoose";
interface IDoctor extends Document {
  name: String;
  email: String;
  specialtyId: {
    type: String;
    ref: String;
    required: Boolean;
  };
  address: String;
  phoneNumber: Number;
  password: String;
  image: string;
}
export { IDoctor };
