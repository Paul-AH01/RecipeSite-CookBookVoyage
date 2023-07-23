import express from "express";
import { RatingModel } from "../models/RatingModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RatingModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    try { 
        const { rating, recipeId, userId } = req.body;

        const newRating = new RatingModel({
             rating,
              userId,
              recipeId,
            });

        const response = await newRating.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

export { router as RatingRouter };