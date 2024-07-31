import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import MainContent from '../components/MainContent';

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default MainLayout;
