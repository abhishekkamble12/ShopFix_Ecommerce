import express from "express";
import categoryController from "../controllers/Category.js";

const router = express.Router();

router
    .get("/", categoryController.getAll)
    .get("/:id", categoryController.getById)
    .post("/", categoryController.create)
    .patch("/:id", categoryController.updateById)
    .delete("/:id", categoryController.deleteById);

export default router;