import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, PlusSquare, Film, User, Instagram, Heart } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2">
          <Instagram className="h-8 w-8" />
          <span className="text-xl font-semibold hidden sm:inline">Instagram</span>
        </Link>
        
        <div className="hidden sm:block max-w-xs w-full">
          <Link to="/search" className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link to="/">
            <Home className={`nav-icon ${location.pathname === '/' ? 'text-black' : 'text-gray-500'}`} />
          </Link>
          <Link to="/search" className="sm:hidden">
            <Search className={`nav-icon ${location.pathname === '/search' ? 'text-black' : 'text-gray-500'}`} />
          </Link>
          <PlusSquare className="nav-icon text-gray-500" />
          <Film className="nav-icon text-gray-500" />
          <Link to="/notifications">
            <Heart className={`nav-icon ${location.pathname === '/notifications' ? 'text-black' : 'text-gray-500'}`} />
          </Link>
          <Link to="/profile">
            <User className={`nav-icon ${location.pathname === '/profile' ? 'text-black' : 'text-gray-500'}`} />
          </Link>
        </div>
      </div>
    </nav>
  );
}