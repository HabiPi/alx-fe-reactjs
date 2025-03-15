import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const handleFavoriteClick = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </Link>
          <button onClick={() => handleFavoriteClick(recipe.id)}>
            {favorites.includes(recipe.id) ? 'Remove Favorite' : 'Add to Favorites'}
          </button>
        </div>
      ))}
      {filteredRecipes.length === 0 && useRecipeStore.getState().searchTerm && (
        <p>No recipes found matching your search term.</p>
      )}
    </div>
  );
};

export default RecipeList;