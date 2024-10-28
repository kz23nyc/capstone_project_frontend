import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext'; 

const RecipeList = () => {
  const { state } = useContext(RecipeContext); // access to the global state by RecipeContext in the app
  const { recipes, loading, error } = state; // Pull out the recipes, loading, error properties from the state to use them in our component logic

  // Conditional rendering
  if (loading) return <p>Loading...</p>; // Loading State
  if (error) return <p>{error}</p>; // Error State
  // If the recipes array is empty or undefined
  if (!recipes || recipes.length === 0) return <p>No recipes found.</p>;

  // Rendering the recipe list
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
          <p className="text-gray-600 mt-2">{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


