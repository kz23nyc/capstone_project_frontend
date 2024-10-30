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
    <div className="max-w-4xl mx-auto p-4">
    <Link to="/" className="text-blue-500 hover:text-blue-700">← Back to Recipes</Link>
    <div className="mt-4">
      <img
        src={recipe.image || 'https://via.placeholder.com/128x195.png?text=No+Image'}
        alt={recipe.title}
        className="w-full h-auto object-cover"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{recipe.title}</h2>
        <h3 className="text-md text-gray-600">{recipe.categories}</h3>
        <p className="text-sm text-gray-800">{recipe.ingredients}</p>        
        <p className="text-gray-800">{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;