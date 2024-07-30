import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigation = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      firstname: firstName,
      lastname: lastName,
      dateOfBirth: birthday,
      email: email,
      password: password,
    };

    try {
      await axios.post('http://localhost:8088/api/v1/auth/register', payload);
      navigation('/ActivationCode'); 
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../src/assets/img/manzara.jpg')" }}>
      <div className="w-full max-w-sm p-8 space-y-6 backdrop-blur-md rounded shadow-md">
        <h2 className="text-3xl font-bold text-center text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative flex flex-col gap-3 items-center">
            <input
              placeholder="Firstname"
              type="text"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="backdrop-blur-md w-full p-2 pr-10 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Lastname"
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="backdrop-blur-md w-full p-2 pr-10 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Birthday"
              type="date"
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="backdrop-blur-md w-full p-2 pr-10 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Mail"
              type="email"
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="backdrop-blur-md w-full p-2 pr-10 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="backdrop-blur-md w-full p-2 pr-10 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-white">Remember me</label>
            </div>
            <a href="#" className="text-sm text-white hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-black bg-white rounded-3xl hover:bg-fuchsia-400 focus:outline-none focus:bg-blue-700"
          >
            <Link to="/ActivationCode">Register</Link>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
