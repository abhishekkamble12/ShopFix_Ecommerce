import express from "express";
import userController from "../controllers/User.js";

const router = express.Router();

// ✅ Static routes first
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

// 🟡 Dynamic routes last
router.get("/:id", userController.getById);
router.patch("/:id", userController.updateById);

export default router;
