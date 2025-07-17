import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // use this for navigation and location [don't remove]
import { Home, User, ChevronRight } from 'lucide-react'; // use this for importing icons as needed

// lucid-react guide is https://lucide.dev/icons


// these are props for the SideNav component
interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
} 

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/profile', label: 'Profile', icon: User },
    // you can more menu items as needed
  ];

  return ( //written complete code for SideNav component
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Side Navigation */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200
      `}>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        </div>
        
        <div className="py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors
                  ${isActive ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''}
                `}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default SideNav;