const mongoose = require('mongoose');

// This schema is used to store the recipe information
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        quantaty: Number,
    },
    preptime: {
        type: Number,
        required: true,
    },
    cooktime: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    directions: {
        type: String,
        required: true,
    }
});


const Recipe = mongoose.model('Recipe', recipeSchema);

// allows the recipe  schema to be used in other files
module.exports = Recipe;