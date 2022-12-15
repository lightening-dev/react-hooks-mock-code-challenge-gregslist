import React from "react";

function Search({search, setSearch}) {
  
  
  
  
  function handleChange(e) {
    e.preventDefault();
    
    setSearch(e.target.value);
    
    console.log("submitted");

    
  }

  return (
    <form className="searchbar" >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
         onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
