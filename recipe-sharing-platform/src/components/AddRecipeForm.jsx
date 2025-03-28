import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
      isValid = false;
    } else {
      const ingredientList = ingredients.split('\n').filter(item => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'At least 2 ingredients are required';
        isValid = false;
      }
    }

    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log({ title, ingredients, steps });
      
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
            />
            {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
              Preparation Steps
            </label>
            <textarea
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.steps ? 'border-red-500' : ''}`}
            />
            {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;