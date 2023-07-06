import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import recipeService from '../services/recipeService';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await recipeService.getRecipes();
        setRecipes(response);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home">
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;