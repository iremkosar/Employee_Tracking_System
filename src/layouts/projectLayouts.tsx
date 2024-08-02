import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import ProjectPage from '../pages/projectpage';



const projectLayouts: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
       <ProjectPage/>
      </div>
    </div>
  );
};

export default projectLayouts;
