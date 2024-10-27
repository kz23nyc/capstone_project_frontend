import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext'; 

const RecipePage = () => {
  const { state } = useContext(RecipeContext); // access to the global state by RecipeContext in the app
  const { recipes, loading, error } = state; // Pull out the recipes, loading, error properties from the state to use them in our component logic

  // Conditional rendering
  if (loading) return <p style={styles.message}>Loading...</p>; // Loading State
  if (error) return <p style={styles.message}>{error}</p>; // Error State
  // If the recipes array is empty or undefined
  if (!recipes || recipes.length === 0) return <p style={styles.message}>No recipes found.</p>;

  // Rendering the recipe list
  return (
    {recipes.map(recipe => (
        <div>
        <div>
          <img
            src={recipe.image || 'https://via.placeholder.com/128x195.png?text=No+Image'}
            alt={recipe.title}
            style={styles.image}
          /></div>
          <h3>{recipe.title}</h3>
          <Link to="/" >View Details</Link>       
        </div>
      ))}
    );
   

export default RecipePage;