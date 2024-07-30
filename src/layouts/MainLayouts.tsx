import { jwtDecode } from 'jwt-decode';
import React from 'react';

interface JwtPayload {
  fullName: string;
}

const MainLayout: React.FC = () => {
  const userToken = localStorage.getItem('token');

  if (!userToken) {
    return <div>Lütfen giriş yapın.</div>;
  }

  let fullName = '';

  try {
    const data: JwtPayload = jwtDecode<JwtPayload>(userToken);
    fullName = data.fullName;
  } catch (error) {
    console.error('Token decoding error:', error);
    return <div>Geçersiz token.</div>;
  }
   
  return (
    <div className="min-h-screen bg-slate-500">
      <h1>Hoş geldiniz {fullName}</h1>
     
      
      <div className='text-white text-center flex justify-center bg-slate-500 w-full min-h-screen'>HOME PAGE</div>
    </div>
  );
};

export default MainLayout;
