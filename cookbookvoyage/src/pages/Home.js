import { useEffect, useState } from "react";
import axios from "axios";
import { getUserID } from "../hooks/getUserID";


export const Home = () => {
  const userID = getUserID();

  const [savedRecipes, setSavedRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [ratingValue, setRatingValue] = useState(1);

  // this useEffect hook will fetch the recipes from the database,
  // and store them in the recipes state, which will be used to display the recipes.
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/id/${userID}`      
        );
        setSavedRecipes(response.data.savedRecipes);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedRecipes();
    fetchRecipes();
  }, []);

  const saveRecipe = async (recipeId) => {
    try {
      await axios.put("http://localhost:3001/recipes", { recipeId, userID });
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (recipeId) => {
    setClickedRecipe(recipeId);
  };

  const handleRatingSubmit = async (event, recipeId) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/ratings", {
        rating: ratingValue,
        recipeId: recipeId,
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };



  // this is the code that was used to create the recipe cards.
  return (
    <div className="recipe-container">
      <ul className="recipe-cards-container">
        {recipes.map((recipe) => {
          const isClickedRecipe = clickedRecipe && clickedRecipe === recipe._id;
          return (
            <li key={recipe._id} onClick={() => handleClick(recipe._id)}>
              <button
                className="bookmark-button"
                onClick={() => saveRecipe(recipe._id)}
                >
                  Save Recipe
              </button>
              <div className="recipe-name">
                <h2>{recipe.name}</h2>
              </div>
              <div className="recipe-details">
                <img src={recipe.imageUrl} alt={recipe.name} />
              </div>
              <div>
                <form className="rating-form "
                  onSubmit={(event) => handleRatingSubmit(event, recipe._id)}
                >
                  <label htmlFor="rating" className="ratings-text" > Rating: (1-5) </label>
                  <input
                    className="ratings-input"
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={ratingValue}
                    onChange={(event) => setRatingValue(event.target.value)}
                  />
                  <button type="submit" className="rating-submit">Submit Rating</button>
                </form>
              </div>
              {isClickedRecipe && (
                <div className="recipe-details">
                  <p>Servings: {recipe.servings}</p>
                  <p>Prep Time: {recipe.prepTime} (minutes) </p>
                  <p>Cook Time: {recipe.cookTime} (minutes)</p>
                  <p>Calories: {recipe.calories} (Kcal) </p>
                  <p>Ingredients: {recipe.ingredients}</p>
                  <p>Instructions: {recipe.instructions}</p>
                  <p>User: {recipe.userId}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
