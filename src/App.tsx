import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import ActivationCode from "./pages/ActivationCode";
import MainLayouts from "./layouts/MainLayouts";


import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ActivationCode" element={<ActivationCode />} />
        <Route path="/" element={<MainLayouts />} />
      </Routes>
    </Router>
  )
}

export default App
