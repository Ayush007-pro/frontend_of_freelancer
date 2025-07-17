import React from 'react';
import { Link } from 'react-router-dom'; // use this for navigation
import { Home, Menu, X, ChevronDown, Bell } from 'lucide-react'; // use this for importing icons as needed

// lucid-react guide is https://lucide.dev/icons


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <nav className="bg-white shadow-lg border-b">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       <div className="flex items-center">
    //         <Link to="/" className="text-2xl font-bold text-blue-600">
    //           Place for Logo
    //         </Link>
    //       </div>
          
    //       <div className="hidden md:block">
    //         <div className="ml-10 flex items-baseline space-x-4">
    //           <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
    //             <Home className="w-4 h-4 mr-1" />
    //             Home
    //           </Link>
    //           <Link to="/user/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
    //             Login
    //           </Link>
    //           <Link to="/user/register" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
    //             Sign Up
    //           </Link>
    //         </div>
    //       </div>

    //       <div className="md:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           className="text-gray-700 hover:text-blue-600 p-2"
    //         >
    //           {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {isMenuOpen && (
    //     <div className="md:hidden">
    //       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
    //         <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
    //           Home
    //         </Link>
    //         <Link to="/user/login" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
    //           Login
    //         </Link>
    //         <Link to="/user/register" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
    //           Sign Up
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </nav>
    <header className="bg-[#18251B] text-white p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-sm">LOGO</span>
              <span className="text-sm font-bold">name_of_web</span>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
              Login
            </Link>
            <Link to="/register" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;