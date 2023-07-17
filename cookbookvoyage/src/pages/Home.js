import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);

  // this useEffect hook will fetch the recipes from the database,
  // and store them in the recipes state, which will be used to display the recipes.
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
      const response = await axios.get("http://localhost:3001/recipes");
      setRecipes(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

    fetchRecipes();
  }, []);

  // this is the code that was used to create the recipe cards.
  return ( 
  <div className="recipe-container">
    <ul className="recipe-cards-container">
      {recipes.map((recipe) => {
        return (
          <li key={recipe._id}>
            <div className="recipe-name">
              <h2>{recipe.name}</h2>
            </div>
            <div className="recipe-details">              
              <img src={recipe.imageUrl} alt={recipe.name} />
              <p>Servings: {recipe.servings}</p>
              <p>Prep Time: {recipe.prepTime} (minutes) </p>
              <p>Cook Time: {recipe.cookTime} (minutes)</p>
              <p>Calories: {recipe.calories} (Kcal) </p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>User: {recipe.userId}</p>
            </div>
          </li>
        );
      })}
    </ul>
    </div>
  );
};