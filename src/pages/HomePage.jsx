import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import mainImage from "../assets/images/mainimage.png";
import featuredRecipe1 from "../assets/images/pasta.jpg";
import featuredRecipe2 from "../assets/images/salad.jpg";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="PantryLicious Logo" className="h-36" />
          <div>
            <h1 className="text-2xl text-green-600 font-bold">PantryLicious</h1>
            <h2 className="text-xl text-green-500">
              Whip up Magic with What You Have
            </h2>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center justify-center"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Find a recipe or ingredient"
          className="form-input w-full max-w-xl rounded-md border-2 border-gray-300 p-2"
        />
      </div>

      <nav className="flex justify-around text-sm font-medium text-gray-700 py-3 bg-gray-100 rounded-md">
        <a href="#" className="hover:text-green-600">
          Dinner
        </a>
        <a href="#" className="hover:text-green-600">
          Quick & Easy
        </a>
        <a href="#" className="hover:text-green-600">
          Breakfast
        </a>
        <a href="#" className="hover:text-green-600">
          Salad
        </a>
        <a href="#" className="hover:text-green-600">
          About us
        </a>
        <a href="#" className="hover:text-green-600">
          Newsletter
        </a>
      </nav>

      <main className="py-4">
        <div className="flex justify-center mb-6">
          <img
            src={mainImage}
            alt="Delicious Pasta"
            className="rounded-lg shadow-lg"
          />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <img
              src={featuredRecipe1}
              alt="Featured Recipe 1"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={featuredRecipe2}
              alt="Featured Recipe 2"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>

      <footer className="text-center py-4 text-sm text-gray-600">
        © 2024 PantryLicious all rights reserved
      </footer>
    </div>
  );
}
