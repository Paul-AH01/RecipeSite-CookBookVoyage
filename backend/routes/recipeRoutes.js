// recipeRoutes.js
const express = require('express');
const router = express.Router();

// Placeholder data
const mockRecipes = [
  {
    id: 1,
    title: 'Recipe 1',
    description: 'Recipe 1 description',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: 'Recipe 1 instructions',
  },
  {
    id: 2,
    title: 'Recipe 2',
    description: 'Recipe 2 description',
    ingredients: ['Ingredient 3', 'Ingredient 4'],
    instructions: 'Recipe 2 instructions',
  },
  // Add more mock recipes as needed
];

// Controller function to handle fetching all recipes
router.get('/recipes', (req, res) => {
  res.json(mockRecipes);
});

// Controller function to handle fetching a specific recipe
router.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = mockRecipes.find((r) => r.id === Number(id));
  if (!recipe) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  res.json(recipe);
});

module.exports = router;
