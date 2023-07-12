import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    prepTime: {
        type: Number,
        required: true,
    },
    cookTime: {
        type: Number,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    instructions: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', 
        required: true
    }

});

export const RecipeModel = mongoose.model('recipes', RecipeSchema);