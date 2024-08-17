import doctorController from "~/server/controllers/doctor.controller";
import { createRouter, defineEventHandler, useBase } from "h3";
const router = createRouter();
router.get("/get", defineEventHandler(doctorController.getDoctor));
router.get("/getAll", defineEventHandler(doctorController.getAllDoctors));
router.get(
  "/check/:email",
  defineEventHandler(doctorController.checkDoctorEmail)
);
router.post("/new", defineEventHandler(doctorController.newDoctor));
router.post("/login", defineEventHandler(doctorController.loginDoctor));

export default useBase("/api/doctor", router.handler);
