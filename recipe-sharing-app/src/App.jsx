import React from 'react';
import RecipeList from './components/RecipeList';
import './app.css';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <addRecipeForm /> {/* use the AddRecipeForm*/}
      <RecipeList /> {/* use the RecipeList component */}
      </div> 
  );
}

export default App
