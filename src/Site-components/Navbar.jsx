import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 text-[#616161] container mx-auto md:my-3 sm:my-2 p-4 flex items-center justify-between md:justify-around md:rounded relative">
      <div className="cursor-pointer text-2xl font-bold font-headings">UI.Stocks</div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden   focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu Items */}
      <div className={`absolute md:static top-16 right-0 h-dvh max-w-[75%] bg-gray-100 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6 p-4 md:p-0 md:h-fit md:w-auto`}>
        <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left w-full md:w-auto">
          <a href="#home" className="hover:text-indigo-600 p-2 md:p-0">Home</a>
          <a href="#docs" className="hover:text-indigo-600 p-2 md:p-0">Docs</a>
          <a href="#ui-templates" className="hover:text-indigo-600 p-2 md:p-0">UI-Templates</a>

          {/* Search Box (for Mobile) */}
          <div className="md:hidden p-3 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 pr-10 w-full rounded-md bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Search Box (for Desktop) */}
      <div className="hidden md:flex items-center relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pr-12 rounded-md bg-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-600 w-64"
        />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-md">
          <Search className="text-gray-700 cursor-pointer" size={23} />
        </div>
      </div>

    </nav>
  );
}

export default Navbar;