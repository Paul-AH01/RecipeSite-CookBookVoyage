function addRecipes (){

  const [recipe,setRecipe] = useState("");
  const [serving,setServing] = useState("");
  const [time,setTime] = useState("");
  const [calories,setCalories] = useState("");
  const [ingredients,setIngredients] = useState("");
  const [method,setMethod] = useState("");
    
  return (
<div className="addRecipe">

<label htmlFor="Name">Recipe Name</label>
<input type="name" placeholder="name" id="name" name="Recipe Name"/>

<label htmlFor="Servings">Number Of Servings</label>
<input type="text" placeholder="servings" id="servings" name="servings"/>

<label htmlFor="Time">Time to make</label>
<input type="Time" placeholder="time" id="time" name="Time to Make"/>

<label htmlFor="Calories">Calories/ Serving</label>
<input type="text" placeholder="Calories" id="Calories" name="Calories"/>

<label htmlFor="Ingredients">Ingredients</label>
<input type="text" placeholder="ingredients" id="ingredients" name="Ingredients"/>

<label htmlFor="Method">Method</label>
<input type="text" placeholder="Method" id="method" name="Method"/>

<label htmlFor="Uploadimage">Upload Image</label>
<input type="image" placeholder="image" id="image" name="image"/>

<button type="submit">Upload Image</button>

</div>
)
}