import { Specialtie } from "~/server/models/specialtie.model";
export default defineEventHandler(async (event) => {
  try {
    const documents = await Specialtie.find({});
    return documents;
  } catch (err) {
    return err;
  }
});
