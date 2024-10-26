import { Link } from "react-router-dom";
import logo from './src/assets/logo.png';

export default function NavBar() {
  return (
    <nav>
     <Link to="/">
        <img src={logo} alt="Logo"/>
      </Link>
      <div>
        <Link to="/recipes" >Recipes</Link>
        <Link to="/login" >Login</Link>
        <Link to="/signup" >Signup</Link>
      </div>
    </nav>
  );
}