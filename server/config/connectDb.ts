import mongoose from "mongoose";
export default defineNitroPlugin(async (nitroApp) => {
  try {
    await mongoose.connect(useRuntimeConfig().mongodbUri);
    console.log("database connected");
  } catch (err: any) {
    console.error(err);
  }
});
