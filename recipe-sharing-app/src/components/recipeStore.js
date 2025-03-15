import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

const useRecipeStore = create((set) => ({
  recipes: [
    { id: '1', title: 'Pasta Carbonara', description: 'Classic Italian pasta dish.' },
    { id: '2', title: 'Chocolate Cake', description: 'Delicious homemade chocolate cake.' },
  ],
  addRecipe: (title, description) => {
    set((state) => ({
      recipes: [...state.recipes, { id: uuidv4(), title, description }],
    }));
  },
  deleteRecipe: (recipeId) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    }));
  },
  updateRecipe: (recipeId, updatedTitle, updatedDescription) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === recipeId
          ? { ...recipe, title: updatedTitle, description: updatedDescription }
          : recipe
      ),
    }));
  },
}));

export { useRecipeStore };