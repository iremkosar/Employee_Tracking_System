import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import ActivationCode from "./pages/ActivationCode";
import MainLayouts from "./layouts/MainLayouts";
import EmployeePage from './pages/employeepage';
import EmployeeLayouts from "./layouts/employeeLayouts"; 
import ProjectPage from "./pages/projectpage";
import ProjectLayouts from "./layouts/projectLayouts";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ActivationCode" element={<ActivationCode />} />
        <Route path="/EmployeePage" element={<EmployeePage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/" element={<MainLayouts />} />
        <Route path="/employeeLayouts" element={<EmployeeLayouts />} />
        <Route path="/projectLayouts" element={<ProjectLayouts />} /> 
      </Routes>
    </Router>
  );
}

export default App;
