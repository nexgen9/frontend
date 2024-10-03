import React, { useState } from 'react';
import "./Css/Search.css";
import Item from '../components/Item/Item';


function Search() {
  const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:4000";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return;  // Avoid searching for empty strings
    try {
      const response = await fetch(`${baseUrl}/search?q=${searchTerm}`);
      const results = await response.json();
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-form">
      <h1 className='search-title'>Search for Products</h1>
      <div className="search-input">
      <input
      style={{outline:"none",}}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSearch(); // Trigger search on Enter key press
        }}
      />
      <button onClick={handleSearch} >Search</button>
      </div>
      </div>
      

      {/* Display search results */}
      {searchResults.length > 0 && (
        <> <h3>Search Results</h3>
        <div className="search-results">
        
          {searchResults.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
          ))}
        </div>
        </> 
      )}
    
    </div>
  );
}

export default Search;