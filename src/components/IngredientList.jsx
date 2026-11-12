export default function IngredientsList(p)
{
    const ingredientsListItems = p.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function getRecipe()
    {
        const aiResponse = p.getRecipeFromGenAi(p.ingredients)
        console.log(aiResponse)
        //p.getRecipeFromGenAi(p.ingredients)
    }

    return(
        <section>
            <h2>Current ingredients:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {p.ingredients.length > 3 && 
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
            </div>
            }
        </section>
    )
}