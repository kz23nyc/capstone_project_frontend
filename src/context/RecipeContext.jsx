import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import recipeReducer from '../reducers/recipeReducers';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const initialState = {
    recipes: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

// Add prop types for RecipeProvider
RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define children as a required prop
};

export { RecipeContext, RecipeProvider };
