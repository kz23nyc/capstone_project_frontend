import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/About.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import RecipeList from "./pages/RecipeList.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx"

//Import Cloudinary Libraries
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


//Initialize Cloudinary instance
const cld = new Cloudinary({
  cloud: { cloudName: 'dbndth2od' }
});

 // Create a Cloudinary instance
 const img = cld
 .image('cld-sample-4')
 .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
 .quality('auto')
 .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

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
     {/* Render the Cloudinary image */}
     <div className="p-4">
        <AdvancedImage cldImg={img} />
      </div>
    
    
    </Router>   
  
  );
 

export default App;
