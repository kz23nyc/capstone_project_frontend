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
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


