import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;