import React, { useEffect, useState } from "react";
import axios from "axios";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";

import { getUserID } from "../hooks/getUserID";

export const Profile = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [clickedRecipe, setClickedRecipe] = useState(null);
  // const [ratingValue, setRatingValue] = useState(1);
  const [isRecipeClicked, setIsRecipeClicked] = useState(false);
  

  useEffect(() => {
    const userID = getUserID();
    if (userID) {
      const fetchSavedRecipes = async () => {
        try {
          const response = await axios.get(
            `https://cookbookvoyage-back.onrender.com/recipes/savedRecipes/${userID}`
          );
          setSavedRecipes(response.data);
          console.log(response.data); 
        } catch (err) {
          console.error(err);
        }
      };

      fetchSavedRecipes();
    }
  }, []);

  const handleClick = (recipeId) => {
    if (clickedRecipe === recipeId) {
      setIsRecipeClicked(!isRecipeClicked);
    } else {
      setClickedRecipe(recipeId);
      setIsRecipeClicked(true);
    }
  };

  // const handleRatingSubmit = async (event, recipeId) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:3001/ratings", {
  //       rating: ratingValue,
  //       recipeId: recipeId,
  //     });
  //     console.log(response.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  return (

    <div className="recipe-container">
          <ul className="recipe-cards-container">
        {savedRecipes.map((recipe) => {
          const isClickedRecipe = clickedRecipe === recipe._id;
          const hideOtherRecipes = isRecipeClicked && !isClickedRecipe ? "hidden" : "";
          return (
            <li key={recipe._id}
            onClick={() => handleClick(recipe._id)}
            className={hideOtherRecipes}>              
              <div className="recipe-name">
                <h2>{recipe.name}</h2>
              </div>
              <div className="recipe-details">
                <img src={recipe.imageUrl} alt={recipe.name} />
                <div className="share-buttons"><br />
                  <FacebookShareButton url={"https://cookbookvoyage-back.onrender.com/recipes"} quote={recipe.name}>
                  <FacebookIcon size={32} round /> <br />               
                  </FacebookShareButton>
                  <TwitterShareButton url={"https://cookbookvoyage-back.onrender.com/recipes"} title={recipe.name}>
                  <TwitterIcon size={32} round /><br />
                  </TwitterShareButton>
                  <EmailShareButton url={"https://cookbookvoyage-back.onrender.com/recipes"} subject={recipe.name}>
                  <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
              </div>
              {/* <div>
                <form className="ratings-form"
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
              </div> */}
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