import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch(`./api/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching recipe detail:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipe details.</p>;
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div >
      <Link to="/" >← Back to Recipes</Link>
      <div >
        <img
          src={recipe.image || 'https://via.placeholder.com/128x195.png?text=No+Image'}
          alt={recipe.title}
     
        />
        <div >
          <h2>{recipe.title}</h2>
          <h3>By {recipe.author}</h3>
          <p>Cuisine:</p>        
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;