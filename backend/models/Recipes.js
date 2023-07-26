import mongoose from "mongoose";

// a schema is the structure of the data, this one is for recipes,
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
    // this is the user id that will be used to link the recipe to the user
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', 
        required: true
    },
});

export const RecipeModel = mongoose.model('recipes', RecipeSchema);