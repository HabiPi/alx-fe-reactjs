import React, { useState, useEffect } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [instructions, setInstructions] = useState(recipe.instructions);

    useEffect(() => {
        setTitle(recipe.title);
        setIngredients(recipe.ingredients);
        setInstructions(recipe.instructions);
    }, [recipe]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && ingredients && instructions) {
            updateRecipe({ id: recipe.id, title, ingredients, instructions });
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="instructions">Instructions:</label>
                <textarea
                    id="instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Update Recipe</button>
        </form>
    );
};  

export default EditRecipeForm;