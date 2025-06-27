import express from "express";
import addressController from "../controllers/Adress.js";

const router = express.Router();

router
    .post("/", addressController.create)
    .get("/user/:id", addressController.getByUserId)
    .get("/:id", addressController.getById)
    .patch("/:id", addressController.updateById)
    .delete("/:id", addressController.deleteById);

export default router;