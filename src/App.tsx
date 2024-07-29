import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import ActivationCode from "./pages/ActivationCode";


import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ActivationCode" element={<ActivationCode />} />
      </Routes>
    </Router>
  )
}

export default App
