import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './RecipeList'; // Assuming you have this component
import RecipeDetails from './RecipeDetails';
import AddRecipeForm from './AddRecipeForm'; // Assuming you have this component

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Recipe</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;