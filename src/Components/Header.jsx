import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-green-600">LOGOHERE</h2>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-lg text-gray-700 hover:text-xl">Home</a>
          <a href="#" className="text-lg text-gray-700 hover:text-xl">Services</a>
          <a href="#" className="text-lg text-gray-700 hover:text-xl">Pricing</a>
          <a href="#" className="text-lg text-gray-700 hover:text-xl">Submit Order</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Try For Free
        </button>
      </div>
    </header>
  );
};

export default Header;
