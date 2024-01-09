import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

function Layout() {
  return (
    <div className="m-12 md:m-32 lg:m-32 ">
      <Navbar />
      <div className="my-1 md:my-4 lg:my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
