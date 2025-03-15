import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    // Optionally, you might want to navigate away or show a success message here
  };

  return (
    <div>
      <h3>Edit Recipe</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`edit-title-${recipe.id}`}>Title:</label>
          <input
            type="text"
            id={`edit-title-${recipe.id}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            required
          />
        </div>
        <div>
          <label htmlFor={`edit-description-${recipe.id}`}>Description:</label>
          <textarea
            id={`edit-description-${recipe.id}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;