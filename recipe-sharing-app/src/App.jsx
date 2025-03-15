import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';


function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRecipeClick = (id) => {
    setSelectedRecipeId(id);
  }

  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList onRecipeClick={handleRecipeClick} />
      {selectedRecipeId && <RecipeDetails recipeId={selectedRecipeId} />}
    </div>
  );
}

export default App;