import { useState } from "react";

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

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Create New Account</h1>
        <a href="/login" className="text-blue-500 hover:text-blue-700 text-sm">Already Registered? Login</a>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block">
          <span className="text-gray-700">Name:</span>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required 
          />
        </label>
        <label htmlFor="email" className="block">
          <span className="text-gray-700">Email:</span>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required 
          />
        </label>
        <label htmlFor="password" className="block">
          <span className="text-gray-700">Password:</span>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required 
          />
        </label>
        <label htmlFor="confirmPassword" className="block">
          <span className="text-gray-700">Confirm Password:</span>
          <input
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required 
          />
        </label>
        <label htmlFor="dateOfBirth" className="block">
          <span className="text-gray-700">Date of Birth:</span>
          <input
            type="date" 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required 
          />
        </label>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
