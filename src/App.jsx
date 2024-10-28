import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/About.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import RecipeList from "./pages/RecipeList.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx"



const App= () => (
 
    <Router>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/recipes" element={<RecipeList />} />
    <Route path="/recipes/:id" element={<RecipeDetails />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    </Routes> 
    </Router>   
  
  );


export default App;
