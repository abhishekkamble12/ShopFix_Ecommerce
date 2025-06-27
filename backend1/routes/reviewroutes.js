import express from 'express';
import reviewController from "../controllers/Review.js";

const router = express.Router();

router
    .post("/", reviewController.create)
    .get('/product/:id', reviewController.getByProductId)
    .get('/:id', reviewController.getById)
    .patch('/:id', reviewController.updateById)
    .delete("/:id", reviewController.deleteById);

export default router;