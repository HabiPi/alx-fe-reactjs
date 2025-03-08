import React from "react";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    if (recipes || recipes.length === 0) {
        return <p>No recipes available. Add one!</p>;
    }

    return (
        <div>
            <h2>recipes</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}><h3>{recipe.title}</h3>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <p>Instructions: {recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;