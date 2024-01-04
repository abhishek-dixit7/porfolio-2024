import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

function Layout() {
  return (
    <div className="mt-32 mx-32">
      <Navbar />
      <div className="min-h-96 my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
