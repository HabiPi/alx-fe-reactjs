import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-4">Recipe not found.</div>;
  }

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal list-inside">
            {recipe.instructions && recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;