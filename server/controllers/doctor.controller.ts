import { Doctor } from "../models/doctor.model";
import type { H3Event } from "h3";
import JWT from "jsonwebtoken";

class DoctorController {
  public async loginDoctor(event: H3Event) {
    const { email, password } = await readBody(event);
    try {
      const doctor: any = await Doctor.findOne({ email: email });
      if (doctor) {
        if (doctor.password === password) {
          const token = JWT.sign({ doctorId: doctor._id }, "secret-key", {
            expiresIn: "1h",
          });
          return token;
        } else {
          return createError({
            statusCode: 400,
            statusMessage: "password not correct",
          });
        }
      } else {
        return createError({
          statusCode: 400,
          statusMessage: "no doctor here",
        });
      }
    } catch (err) {
      return "login in failed" + err;
    }
  }
  public async getDoctor(event: H3Event) {
    const token = getCookie(event, "token");

    if (!token) {
      return createError({ statusCode: 400, statusMessage: "token undefined" });
    }
    try {
      const decoded: any = JWT.verify(token, "secret-key");
      const doctor: any = await Doctor.findOne({ _id: decoded.doctorId });
      const { password, ...otherProperties } = doctor.toObject();

      return { ...otherProperties };
    } catch (err) {
      return createError({
        statusCode: 400,
        statusMessage: "we can't decode token",
      });
    }
  }
  public async newDoctor(event: H3Event) {
    const doctor = await readBody(event);

    let file = undefined;
    try {
      file = await storeFileLocally(doctor.image[0], 8);
    } catch (err) {
      console.log(err);
    }
    try {
      let obj: any = new Object(doctor);
      obj["image"] = file;
      await new Doctor(obj).save();
      console.log("tam");
    } catch (err) {
      throw createError({
        statusCode: 400,
        statusMessage: `hello ${err}`,
      });
    }
  }
  public async checkDoctorEmail(event: H3Event) {
    const email = getRouterParam(event, "email");
    const check = await Doctor.countDocuments({ email });
    if (check) {
      return false;
    } else {
      return true;
    }
  }
  public async getAllDoctors(event: H3Event) {
    try {
      const doctors = await Doctor.find({}).select("-password");
      return doctors;
    } catch (err) {
      return createError({
        statusCode: 400,
        statusMessage: "cannot get doctors",
      });
    }
  }
}

export default new DoctorController();
