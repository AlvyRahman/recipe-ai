import React from "react"

export default function Main()
{
    const [ingredients, setIngredients] = React.useState([])
    console.log(ingredients)
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData)
    {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
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
            <section>
                <h2>Current ingredients:</h2>
                <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
                </ul>
            </section>
        </main>
    )
}