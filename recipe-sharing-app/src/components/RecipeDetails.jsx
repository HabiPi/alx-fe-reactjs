import React from "react";
import useRecipeStore from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";


const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state => 
        state.recipes.find(recipe => recipe.id === parseInt(recipeId))  
    );

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};  

export default RecipeDetails;