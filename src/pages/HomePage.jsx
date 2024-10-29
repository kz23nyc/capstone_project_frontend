import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import mainImage from "../assets/images/mainimage.png";
import featuredRecipe1 from "../assets/images/pasta.jpg";
import featuredRecipe2 from "../assets/images/salad.jpg";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4 font-custom">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="PantryLicious Logo" className="h-36" />
          <div>
            <h1 className="text-3xl text-green-600 font-bold">PantryLicious</h1>
            <h2 className="text-xl text-green-500 font-light italic">
              whip up magic with what you have
            </h2>
          </div>
        </div>
        <div className="flex space-x-4 text-lg">
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

      <nav className="flex justify-around text-lg text-gray-700 py-10 bg-gray-100 rounded-md">
        <Link to="/recipes" className="hover:text-green-600">
          Dinner
        </Link>
        <Link to="/recipes" className="hover:text-green-600">
          Quick & Easy
        </Link>
        <Link to="/recipes" className="hover:text-green-600">
          Breakfast
        </Link>
        <Link to="/recipes" className="hover:text-green-600">
          Salad
        </Link>
        <Link to="/about" className="hover:text-green-600">
          About us
        </Link>
        <Link to="/" className="hover:text-green-600">
          Newsletter
        </Link>
      </nav>

      <main className="py-4">
        <div className="flex justify-center mb-6">
          <Link className="first-line:" to="/recipes">
            <img
              src={mainImage}
              alt="Delicious Pasta"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            />
          </Link>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src={featuredRecipe1}
              alt="Featured Recipe 1"
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 text-center text-lg text-gray-600">
              Fresh Spaghetti with Herbs
            </p>{" "}
            {/* Subtitle for the first image */}
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={featuredRecipe2}
              alt="Featured Recipe 2"
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 text-center text-lg text-gray-600">
              Colorful Vegan Buddha Bowl
            </p>{" "}
            {/* Subtitle for the second image */}
          </div>
        </section>
      </main>

      <div className="max-w-xs mx-auto mt-10">
        <Link
          to="/recipes"
          className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Find out more recipes
        </Link>
      </div>

      <footer className="text-center py-4 text-sm text-gray-600">
        © 2024 PantryLicious all rights reserved
      </footer>
    </div>
  );
}
