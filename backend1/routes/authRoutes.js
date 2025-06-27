import express from "express";
import authController from "../controllers/authController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router
    .post("/signup", authController.signup)
    .post('/login', authController.login)
    .post("/verify-otp", authController.verifyOtp)
    .post("/resend-otp", authController.resendOtp)
    .post("/forgot-password", authController.forgotPassword)
    .post("/reset-password", authController.resetPassword)
    .get("/check-auth", verifyToken, authController.checkAuth)
    .get('/logout', authController.logout);

export default router;
