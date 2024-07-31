import React from 'react';
import EmployeePage from '../pages/employeepage';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-4 bg-gray-100">
        <EmployeePage></EmployeePage>
      {/* <h2 className="text-2xl">Main Page</h2> */}
    </main>
  );
};

export default MainContent;
