import React, { useState } from "react";
import axios from "axios";
import { getUserID } from "../hooks/getUserID";
import { useNavigate } from "react-router-dom";

export const AddRecipes = () => {
    const userID = getUserID();
    const [recipes, setRecipes] = useState({
    name: "",
    servings: 0,
    prepTime: 0,
    cookTime: 0,
    calories: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    userId: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipes({ ...recipes, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = recipes.ingredients;
    ingredients[index] = value;
    setRecipes({ ...recipes, ingredients: ingredients });
  };

  const addIngredient = () => {
    setRecipes({ ...recipes, ingredients: [...recipes.ingredients, ""] });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post("http://localhost:3001/recipes", recipes);
        alert("Recipe added!");
        navigate("/");
    } catch (err) {
        console.error(err);
    }        
  };

  return (
    <div className="add-recipe">
      <form onSubmit={handleSubmit} >
        <h2>Add Recipe</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          id="servings"
          name="servings"
          onChange={handleChange}
        />
        <label htmlFor="prepTime">Prep Time</label>
        <input
          type="number"
          id="prepTime"
          name="prepTime"
          onChange={handleChange}
        />
        <label htmlFor="cookTime">Cook Time</label>
        <input
          type="number"
          id="cookTime"
          name="cookTime"
          onChange={handleChange}
        />
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          id="calories"
          name="calories"
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Ingredients</label>
        {recipes.ingredients.map((ingredient, index) => {
          return (
            <input
              key={index}
              type="text"
              id="ingredients"
              name="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange (event, index)}
            />
          );
        })}
        <button onClick={addIngredient} type="button" >Add Ingredient</button>
        <textarea
          name="instructions"
          id="instructions"
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};
