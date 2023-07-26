import express from 'express';
import { RatingModel } from '../models/RatingModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await RatingModel.find({});
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { rating, recipeId, userID } = req.body;

    const newRating = new RatingModel({
      rating,
      userID: userID, // Update property name to "userID" to match the model
      recipeId,
    });

    const response = await newRating.save();
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export { router as ratingsRouter };