import React from "react"
import Recipe from "./Recipe"

export default function Main()
{
    const [ingredients, setIngredients] = React.useState([])
    
    const [recipeShown, setRecipeShown] = React.useState(false) // testing... will delete later
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

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
            <section>
                <h2>Current ingredients:</h2>
                <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
                </ul>
                {ingredients.length > 3 && 
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>
                }
            </section>
            }
            {recipeShown &&
            <Recipe />
            }
        </main>
    )
}