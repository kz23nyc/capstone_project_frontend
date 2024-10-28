import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="max-w-xs mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
      <label>
      Email:
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-input"/>
    </label>
    <label>
      Password:
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="form-input"/>
    </label>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
  </form>
  <button onClick={() => navigate('/signup')} className="mt-4 text-blue-500">Need an account? Sign up.</button>
</div>
  );
};

export default LoginPage;
