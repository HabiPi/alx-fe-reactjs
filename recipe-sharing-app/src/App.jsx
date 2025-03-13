import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'


function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}
export default App;
