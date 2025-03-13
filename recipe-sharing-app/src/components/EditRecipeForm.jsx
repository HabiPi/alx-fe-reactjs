import React, { useState, useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
   
    if (recipe) {
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setInstructions(recipe.instructions);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && ingredients && instructions && recipe) {
      updateRecipe({ id: recipe.id, title, ingredients, instructions });
      alert('Recipe updated!');
      
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h3>Edit Recipe</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="edit-title">Title:</label>
          <input
            type="text"
            id="edit-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="edit-ingredients">Ingredients:</label>
          <textarea
            id="edit-ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="edit-instructions">Instructions:</label>
          <textarea
            id="edit-instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;