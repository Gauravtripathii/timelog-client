import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registeration from './Components/registeration';
import TestHome from './Components/TestHome';
import Home from './Components/Home';
import Profile from './Components/Profile';
import About from './Components/Testabout';

const ResponsiveHome = () => {
  return (
    <div>
      {/* Mobile/Tablet View (default to block, hide on laptop and above) */}
      <div className="block lg:hidden">
        <Home />
      </div>
      
      {/* Laptop View (hidden by default, show on laptop and above) */}
      <div className="hidden lg:block">
        <TestHome />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Routes>
          {/* Responsive home route */}
          <Route path="/" element={<ResponsiveHome />} />
          
          {/* Other routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/About Us" element={<About />} />
          <Route path="/register" element={<Registeration />} />
          
          {/* 404 route */}
          <Route path="*" element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;