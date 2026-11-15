import React from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientList"
import { getRecipeFromGenAi } from "../ai"

export default function Main()
{
    const [ingredients, setIngredients] = React.useState([])
    
    const [recipe, setRecipe] = React.useState("")

    function addIngredient(formData)
    {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    async function getRecipe()
    {
        const recipeMarkdown = await getRecipeFromGenAi(ingredients)
        console.log(recipeMarkdown)
        setRecipe(recipeMarkdown)
    }

    return(
        <main>
            <form className="add-ingredient-form"
            action={addIngredient}>
                <input
                type="text"
                placeholder="e.g tomato"
                aria-label="add ingrediant"
                name="ingredient"
                />
                <button>Add Ingrediant</button>
            </form>
            {ingredients.length > 0 && 
            <IngredientsList 
            ingredients={ingredients}
            getRecipe={getRecipe}
            />
            }
            {recipe &&
            <Recipe recipe={recipe}/>
            }
        </main>
    )
}