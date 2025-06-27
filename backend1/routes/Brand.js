import express from "express";
import brandController from "../controllers/Brand.js";

const router = express.Router();

router
    .get("/", brandController.getAll)
    .get("/:id", brandController.getById)
    .post("/", brandController.create)
    .patch("/:id", brandController.updateById)
    .delete("/:id", brandController.deleteById);

export default router;