import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipes',
        required: true
    }
});

export const RatingModel = mongoose.model('ratings', RatingSchema);