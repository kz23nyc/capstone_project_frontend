import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <label htmlFor="email">Email:<input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
      <label htmlFor="password">Password:<input type="password" name="password" value={formData.password} onChange={handleChange} /></label>
      <label htmlFor="confirmPassword">Confirm Password:<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} /></label>
      <input type="submit" value="Signup" />
    </form>
  );
}
