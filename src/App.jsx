import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import RecipeList from "./pages/RecipeList.jsx";
import { RecipeProvider} from './context/Recip'
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx"


// function App() {
//   //State for recipes if needed, assumed to be fetched and stored here
//   const[recipes, setRecipes] = useState ([]);

//   //fetch all recipes when component first render
//   useEffect(() => {
//   // fetch all recipes
//   const fetchRecipes = async() => {
//     const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/projects/`);
//   const recipesData = await res.json();
//   console.log(recipesData);
//   setRecipes(recipesData.projects);  
//   };

//   fetchRecipes();
//   }, [])


 const App= () => (
  <RecipeProvider>
    <Router>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/recipes" element={<RecipeList />} />
    <Route path="/recipes/:id" element={<RecipeDetails />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    </Routes> 
    </Router>   
    </RecipeProvider>
  );


export default App;
