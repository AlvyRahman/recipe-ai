import React from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientList"

export default function Main()
{
    const [ingredients, setIngredients] = React.useState([])
    
    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(formData)
    {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    function toggleRecipeShown()
    {
        setRecipeShown(prev => !prev)
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
            toggleRecipeShown={toggleRecipeShown}
            />
            }
            {recipeShown &&
            <Recipe />
            }
        </main>
    )
}