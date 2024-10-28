export const initialState = {
    recipes: [],
    loading: false,
    error: null,
  };
  
  export const recipeReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state, loading: true, error: null };
      case 'SET_RECIPES':
        return { ...state, recipes: action.payload, loading: false };
      case 'SET_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  export default recipeReducer; 