import React from 'react';
import useRecipeStore from '../store/useRecipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0)
    return <p>No recipes found. Add one!</p>;
return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
          <h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3> {/* Link to recipe details page */}
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Instructions: {recipe.instructions}</p>
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;