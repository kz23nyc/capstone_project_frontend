import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-green-500 text-white">
  <Link to="/">
    <img src={logo} alt="Pantrylicious Logo" className="h-8"/>
  </Link>
  <div>
    <Link to="/recipes" className="px-2">Recipes</Link>
    <Link to="/about" className="px-2">About us</Link>
    <Link to="/login" className="px-2">Login</Link>
    <Link to="/signup" className="px-2">Signup</Link>
  </div>
</nav>



    // <nav>
    //  <Link to="/">
    //     <img src={logo} alt="Logo"/>
    //   </Link>
    //   <div>
    //     <Link to="/recipes" >Recipes</Link>
    //     <Link to="/about" >About us</Link>
    //     <Link to="/login" >Login</Link>
    //     <Link to="/signup" >Signup</Link>
    //   </div>
    // </nav>
  );
}

