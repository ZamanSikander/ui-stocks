import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSearch } from '../Context/SearchContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    navigateToComponent,
    clearSearch
  } = useSearch();
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
    setSelectedIndex(-1); // Reset selected index when search query changes
  };

  // Handle clicking on a search result
  const handleResultClick = (result) => {
    navigateToComponent(result);  // Navigate to the selected component
    setShowResults(false);        // Hide the search results
    setIsOpen(false);             // Close the mobile menu (for mobile screens)
    clearSearch();
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showResults || searchResults.length === 0) return;

    // Arrow down - move selection down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prevIndex =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
    // Arrow up - move selection up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : 0
      );
    }
    // Enter - select the current result
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
        handleResultClick(searchResults[selectedIndex]);
      } else if (searchResults.length > 0) {
        // If no item is selected but there are results, select the first one
        handleResultClick(searchResults[0]);
      }
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset selected index when search results change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchResults]);

  return (
    <nav className="bg-gray-50 text-[#616161] container mx-auto md:my-3 sm:my-2 p-4 flex items-center justify-between md:justify-around md:rounded relative">
      <Link to="/" className="cursor-pointer text-2xl font-bold font-headings">UI.Stocks</Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu Items */}
      <div className={`absolute md:static top-16 right-0 h-dvh max-w-[75%] bg-gray-100 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6 p-4 md:p-0 md:h-fit md:w-auto`}>
        <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left w-full md:w-auto">
          <Link to="/" className="hover:text-indigo-600 p-2 md:p-0">Home</Link>
          <Link to="/docs" className="hover:text-indigo-600 p-2 md:p-0">Docs</Link>
          <a href="#ui-templates" className="hover:text-indigo-600 p-2 md:p-0">UI-Templates</a>

          {/* Search Box (for Mobile) */}
          <div className="md:hidden p-3 w-full" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                ref={inputRef}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="p-2 pr-10 w-full rounded-md bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-md"
                onClick={() => searchQuery ? clearSearch() : null}
              >
                {searchQuery ? (
                  <X className="text-gray-700 cursor-pointer" size={23} />
                ) : (
                  <Search className="text-gray-700 cursor-pointer" size={23} />
                )}
              </button>

              {/* Mobile Search Results */}
              {showResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto ">
                  {isSearching ? (
                    <div className="p-3 text-center text-gray-500">Searching...</div>
                  ) : searchResults.length > 0 ? (
                    <ul>
                      {searchResults.map((result, index) => (
                        <li
                          key={index}
                          className={`p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 ${selectedIndex === index ? 'bg-gray-100' : ''}`}
                          onClick={() => handleResultClick(result)}
                          onTouchStart={() => handleResultClick(result)}
                        >
                          <div className="font-medium">{result.name}</div>
                          {result.type === 'component' && (
                            <div className="text-xs text-gray-500">
                              in {result.category.name}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-3 text-center text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Box (for Desktop) */}
      <div className="hidden md:flex items-center relative" ref={searchRef}>
        <input
          type="text"
          placeholder="Search components..."
          ref={inputRef}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className="p-2 pr-12 rounded-md bg-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-600 w-64"
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-md"
          onClick={() => searchQuery ? clearSearch() : null}
        >
          {searchQuery ? (
            <X className="text-gray-700 cursor-pointer" size={23} />
          ) : (
            <Search className="text-gray-700 cursor-pointer" size={23} />
          )}
        </button>

        {/* Desktop Search Results */}
        {showResults && searchQuery && (
          <div className="absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg z-50 w-full max-h-80 overflow-y-auto">
            {isSearching ? (
              <div className="p-3 text-center text-gray-500">Searching...</div>
            ) : searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className={`p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 ${selectedIndex === index ? 'bg-gray-100' : ''}`}
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="font-medium">{result.name}</div>
                    {result.type === 'component' && (
                      <div className="text-xs text-gray-500">
                        in {result.category.name}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-3 text-center text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>

    </nav>
  );
}

export default Navbar;