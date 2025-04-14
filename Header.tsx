import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-[#162626] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold text-white">
              EUROSTAY
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {!isHome && (
              <Link
                to="/"
                className="text-sm text-white px-6 py-1 rounded-none"
              >
                Home
              </Link>
            )}
            <Link
              to="/about"
              className="text-sm text-white px-6 py-1 rounded-none"
            >
              About
            </Link>
            <Link
              to="/contacts"
              className="text-sm text-white px-6 py-1 rounded-none"
            >
              Contacts
            </Link>
            <Link
              to="/events"
              className="text-sm text-white px-6 py-1 rounded-none"
            >
              Events
            </Link>
            <Link
              to="/login"
              className="text-sm text-white px-6 py-1 rounded-none"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 flex flex-col items-end">
            {!isHome && (
              <Link
                to="/"
                className="block text-sm text-white px-11 py-2 rounded-none"
              >
                Home
              </Link>
            )}
            <Link
              to="/about"
              className="block text-sm text-white px-11 py-2 rounded-none"
            >
              About
            </Link>
            <Link
              to="/contacts"
              className="block text-sm text-white px-11 py-2 rounded-none"
            >
              Contacts
            </Link>
            <Link
              to="/events"
              className="block text-sm text-white px-11 py-2 rounded-none"
            >
              Events
            </Link>
            <Link
              to="/login"
              className="block text-sm text-white px-11 py-2 rounded-none"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;