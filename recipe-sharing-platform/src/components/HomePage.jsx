import React, { useState, useEffect } from 'react';
import data from '../data.json'; 

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data.recipes); 
  }, []);

  return (
    <div className="p-4"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.title} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-sm text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;