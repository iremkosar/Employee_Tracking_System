import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../src/assets/img/manzara.jpg')" }}>
      <div className="w-full max-w-sm p-8 space-y-6 backdrop-blur-md  rounded shadow-md">
        <h2 className="text-3xl font-bold text-center text-white ">Login</h2>
        <form className="space-y-4">

        <div className="relative flex items-center">
            {/* username==mail  */}
      <input
        placeholder="Username"
        type="text"
        id="username"
        className="backdrop-blur-md w-full p-2 pr-10 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </div>
    <div className="relative flex items-center">
      <input
        placeholder="Password"
        type="password"
        id="password"
        className="backdrop-blur-md w-full p-2 pr-10 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    </div>
         
          
          <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
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
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-white">
            Don't have an account? <Link to="/register" className="text-white hover:font-extrabold font-bold">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
