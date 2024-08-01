import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import EmployeePage from '../pages/employeepage';


const employeeLayouts: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <EmployeePage/>
      </div>
    </div>
  );
};

export default employeeLayouts;
