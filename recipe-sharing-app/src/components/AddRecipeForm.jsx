import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const hundleSubmit = (event) => {
        event.preventDefault();
        if (title && ingredients && instructions) {
            addRecipe({ title, ingredients, instructions });
            setTitle("");
            setIngredients("");
            setInstructions("");
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div>
            <h2>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} reqyuired
                    />
                </div>
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)} required />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipeForm;