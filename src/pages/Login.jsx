import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import signin from "../assets/images/signin.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('mongodb+srv://kzy1024:jto4XWXVJLPvloWq@sei.wnh4u.mongodb.net/capstoneproject?retryWrites=true&w=majority', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        navigate('/dashboard'); 
      } else {
        throw new Error(data.message || 'Unable to login');
      }
    } catch (err) {
      setError(err.message);
      console.error('Login failed:', err);
    }
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
          <h1 className="text-xl font-bold mb-4">Login</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <label>
              Email:
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-input w-full px-2 py-1 rounded"/>
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="form-input w-full px-2 py-1 rounded"/>
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Log In</button>
          </form>
          <button onClick={() => navigate('/signup')} className="mt-4 text-blue-500 hover:text-blue-600">Need an account? Sign up.</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
