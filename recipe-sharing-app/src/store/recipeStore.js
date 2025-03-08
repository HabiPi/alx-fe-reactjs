import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes:[],
    addRecipes: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;

