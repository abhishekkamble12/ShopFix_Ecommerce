import express from 'express';
import productController from "../controllers/Product.js";

const router = express.Router();

router
    .post("/", productController.create)
    .get("/", productController.getAll)
    .get("/:id", productController.getById)
    .patch("/:id", productController.updateById)
    .patch("/undelete/:id", productController.undeleteById)
    .delete("/:id", productController.deleteById);

export default router;