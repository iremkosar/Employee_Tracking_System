import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../src/assets/img/manzara.jpg')" }}>
      <div className="w-full max-w-sm p-8 space-y-6 backdrop-blur-md  rounded shadow-md">
        <h2 className="text-3xl font-bold text-center text-white ">Login</h2>
        <form className="space-y-4">
          <div>
            <input
            placeholder='Username'
              type="text"
              id="username"
              className="backdrop-blur-md w-full p-2 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
            placeholder='Password'
              type="password"
              id="password"
              className="w-full p-2 mt-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
            Don't have an account? <a href="#" className="text-white hover:font-extrabold font-bold">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
