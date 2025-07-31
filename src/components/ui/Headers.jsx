import { HamburgerIcon } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonToggle = () => {
        setIsOpen(!isOpen);
    }

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
        { to: '/country', label: 'Country' }
    ];

  return (
    <header className="bg-gray-900 shadow-lg shadow-gray-800/50 h-20 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <NavLink to={"/"} className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
              World Explorer
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <NavLink 
                            to={link.to}
                            className={({ isActive }) =>
                                `text-white hover:text-blue-400 transition-colors duration-300 font-medium ${
                                    isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
                onClick={handleButtonToggle} 
                className="text-white hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
            >
                <HamburgerIcon size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 shadow-lg border-t border-gray-700">
            <ul className="flex flex-col">
                {navLinks.map((link) => (
                    <li key={link.to} className="border-b border-gray-700 last:border-b-0">
                        <NavLink 
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-6 py-4 text-white hover:text-blue-400 hover:bg-gray-800 transition-colors duration-300 ${
                                    isActive ? 'text-blue-400 bg-gray-800' : ''
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Headers;
