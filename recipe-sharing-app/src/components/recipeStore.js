import create from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [
        { id: 1, title: 'Spaghetti Bolognese', ingredients: 'Spaghetti, Ground beef, Tomato sauce', Instruction: 'Cook spaghetti, brown beef, mix sauce' },
        { id: 2, title: 'Chicken Stir-fry', ingredients: 'Chicken breast, Mixed vegetables, Soy sauce', instructions: 'Stir-fry chicken and vegetables, add soy sauce' },
    ],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] })),
    deleteRecipe: (recipeId) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
    })),
    updatedRecipe: (updatedRecipe) => set(state => ({
        recipes: state.recipes.maps(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    })),
    setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;