import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the component categories and their components
const componentData = [
  {
    id: 'navigation',
    name: 'Navigation & Headers',
    components: ['Navbar', 'Sidebar', 'Breadcrumbs', 'Tabs']
  },
  {
    id: 'forms',
    name: 'Forms & Inputs',
    components: ['Buttons', 'Inputs', 'Checkboxes', 'Radio Buttons', 'Selects']
  },
  {
    id: 'cards',
    name: 'Cards & Containers',
    components: ['Cards', 'Modals', 'Sections', 'Panels']
  },
  {
    id: 'tables',
    name: 'Tables & Lists',
    components: ['Tables', 'Data Grids', 'Lists']
  },
  {
    id: 'alerts',
    name: 'Alerts & Notifications',
    components: ['Alerts', 'Toasts', 'Notifications']
  },
  {
    id: 'loaders',
    name: 'Loaders & Animations',
    components: ['Spinners', 'Skeleton Loaders', 'Progress Bars']
  },
  {
    id: 'footers',
    name: 'Footers & CTA',
    components: ['Footers', 'Call-to-Action', 'Banners']
  },
];

// Create the context
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Function to perform search
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Search through component data
    const results = [];
    
    componentData.forEach(category => {
      // Check if category name matches
      if (category.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          type: 'category',
          id: category.id,
          name: category.name,
          components: category.components
        });
      }
      
      // Check if any component in this category matches
      const matchingComponents = category.components.filter(component => 
        component.toLowerCase().includes(query.toLowerCase())
      );
      
      if (matchingComponents.length > 0) {
        matchingComponents.forEach(component => {
          results.push({
            type: 'component',
            id: component.toLowerCase().replace(/\s+/g, '-'),
            name: component,
            category: {
              id: category.id,
              name: category.name
            }
          });
        });
      }
    });
    
    setSearchResults(results);
    setIsSearching(false);
  };

  // Function to navigate to a component
  const navigateToComponent = (result) => {
    setIsSearching(false);
    setSearchQuery('');
    
    if (result.type === 'category') {
      navigate(`/docs`, { state: { activeCategory: result.id } });
    } else if (result.type === 'component') {
      navigate(`/docs`, { 
        state: { 
          activeCategory: result.category.id,
          activeComponent: result.id
        } 
      });
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  // Effect to handle search when query changes
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      performSearch(searchQuery);
    }, 300); // Debounce search for better performance

    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  return (
    <SearchContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery, 
        searchResults, 
        isSearching, 
        performSearch,
        navigateToComponent,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default SearchContext; 