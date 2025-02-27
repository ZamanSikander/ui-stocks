import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white text-2xl font-bold">UI.Stocks</div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Menu Items */}
      <div className={`md:flex md:items-center absolute md:static top-16 left-0 w-full bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
          <a href="#home" className="text-white hover:text-gray-400 p-2 md:p-0">Home</a>
          <a href="#docs" className="text-white hover:text-gray-400 p-2 md:p-0">Docs</a>
          <a href="#ui-templates" className="text-white hover:text-gray-400 p-2 md:p-0">UI-Templates</a>
        </div>
      </div>
      
      {/* Search Box */}
      <div className="hidden md:block">
        <input 
          type="text" 
          placeholder="Search..." 
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />
      </div>
    </nav>
  );
}

export default Navbar;
