import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import ActivationCode from "./pages/ActivationCode";
import MainLayouts from "./layouts/MainLayouts";
import EmployeePage from './pages/employeepage';
import EmployeeLayouts from "./layouts/employeeLayouts"; // Düzeltme burada

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ActivationCode" element={<ActivationCode />} />
        <Route path="/EmployeePage" element={<EmployeePage />} />
        <Route path="/" element={<MainLayouts />} />
        <Route path="/employeeLayouts" element={<EmployeeLayouts />} /> {/* Düzeltme burada */}
      </Routes>
    </Router>
  );
}

export default App;
