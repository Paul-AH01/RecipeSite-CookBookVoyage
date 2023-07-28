import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});     
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    console.log(req.body);
    const recipe = new RecipeModel(req.body);
    
    try {
        const response = await recipe.save();
        console.log(response);
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.put("/", async (req, res) => {
    try {
      const { recipeId, userID } = req.body;
  
      const user = await UserModel.findById(userID);
      if (!user) {
        return res.json({ message: "User not found" });
      }
  
      const recipe = await RecipeModel.findById(recipeId);
      if (!recipe) {
        return res.json({ message: "Recipe not found" });
      }
  
      if (user.savedRecipes.includes(recipeId)) {
        return res.json({ message: "Recipe already saved" });
      }
       
      user.savedRecipes.push(recipeId);
      await user.save();
  
      res.json({ savedRecipes: user.savedRecipes });
    } catch (err) {
      res.json(err);
    }
  });

router.get("/savedRecipes/id/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({ savedRecipes: user.savedRecipes });
    } catch (err) {
        res.json(err);
    }
});

router.get("/savedRecipes/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });
        res.json(savedRecipes);
    } catch (err) {
    }
});

export { router as recipesRouter };