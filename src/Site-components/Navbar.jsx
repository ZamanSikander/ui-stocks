import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 container mx-auto md:my-3 p-4 flex items-center justify-between md:justify-around md:rounded relative">
      <div className="text-white text-2xl font-bold font-headings">UI.Stocks</div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Menu Items */}
      <div className={`absolute md:static top-16 right-0 max-w-[75%] md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6 p-4 md:p-0`}>        
        <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left w-full md:w-auto">
          <a href="#home" className="text-white hover:text-gray-400 p-3 md:p-0">Home</a>
          <a href="#docs" className="text-white hover:text-gray-400 p-3 md:p-0">Docs</a>
          <a href="#ui-templates" className="text-white hover:text-gray-400 p-3 md:p-0">UI-Templates</a>
          
          {/* Search Box (for Mobile) */}
          <div className="md:hidden p-3 w-full">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="p-2 pr-10 w-full rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Box (for Desktop) */}
      <div className="hidden md:flex items-center relative">
        {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
        <input 
          type="text" 
          placeholder="Search..." 
          className="p-2 pr-10 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
      </div>
    </nav>
  );
}

export default Navbar;