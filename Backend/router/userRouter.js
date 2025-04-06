import express from "express";
import { addNewAdmin, getAllDoctors, getUserDetails, login,logoutAdmin,patientRegister, logoutPatient, addNewDoctor } from "../controller/userController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/register", isAdminAuthenticated, addNewAdmin);
router.get("/doctor", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails); 
router.get("/patient/me", isPatientAuthenticated, getUserDetails); 
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin); 
router.get("/patient/logout", isPatientAuthenticated, logoutPatient); 
router.post("/doctor/register", isAdminAuthenticated, addNewDoctor); 

export default router;