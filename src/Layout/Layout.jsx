import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

function Layout() {
  return (
    <div className="min-h-screen mt-16 mx-16">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
