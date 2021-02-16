import React from "react";
import Search1 from  "./Search.css"

const Search = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="head">
      <h1>
        Its just Demo
      </h1>
      <div class="input-group w-50 mx-auto">
        <input
          type="text"
          class="input1"
          placeholder="Search Your Emohii..."
          value={search}
          onChange={onInputChange}
        />
      
          <button class="button" onClick={onSearchClick}>
            Search
          </button>

      
      </div>
    </div>
  );
};

export default Search;
