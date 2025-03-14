import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';


function App() {
  return (
    <BrowserRouter> {}
    <div className="App">
      <h1>Recipe App</h1>
      <Routes> {}<Route path="/" element={
      <>
      <RecipeList />
      <AddRecipeForm />
      </>
      } /> {}
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} /> {}
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
