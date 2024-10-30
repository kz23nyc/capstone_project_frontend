import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useNavigate, Link } from 'react-router-dom';
// import signin from "../assets/images/signin.jpg";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '' // Assuming you want to add a date of birth field
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup Submitted:', formData);
  };

  const signin ="https://res.cloudinary.com/dbndth2od/image/upload/v1730173276/signin_pg9tou.jpg"

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav className="flex justify-around text-lg text-gray-700 py-10 bg-gray-100 rounded-md">
        <Link to="/recipes" className="hover:text-green-600">Dinner</Link>
        <Link to="/recipes" className="hover:text-green-600">Vegan</Link>
        <Link to="/recipes" className="hover:text-green-600">Breakfast</Link>
        <Link to="/recipes" className="hover:text-green-600">Salad</Link>
        <Link to="/about" className="hover:text-green-600">About Us</Link>
        <Link to="/" className="hover:text-green-600">Newsletter</Link>
      </nav>

      <div className="flex-grow flex md:flex-row justify-items-start justify-center">
        <div className="md:w-1/2 flex justify-center items-start">
          <img src={signin} alt="Login Visual" className="max-w-2xl" />
        </div>
        <div className="max-w-xs mx-auto p-4">
          <h1 className="text-xl font-bold mb-4">Create New Account</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label htmlFor="name">
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input w-full px-2 py-1 rounded"/>
            </label>
            <label htmlFor="email">
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input w-full px-2 py-1 rounded"/>
            </label>
            <label htmlFor="password">
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required className="form-input w-full px-2 py-1 rounded"/>
            </label>
            <label htmlFor="confirmPassword">
              Confirm Password:
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="form-input w-full px-2 py-1 rounded"/>
            </label>
            <label htmlFor="dateOfBirth">
              Date of Birth:
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="form-input w-full px-2 py-1 rounded"/>
            </label>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold">Sign Up</button>
          </form>
          <Link to="/login" className="mt-4 text-blue-500 hover:text-blue-600">Already Registered? Login</Link>
        </div>
      </div>
    </div>
  );
}