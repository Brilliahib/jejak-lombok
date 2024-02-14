// SearchBar.js

import React from "react";

const SearchBar = ({ label, placeholder, handleChange }) => {
  return (
    <div className="flex items-center">
      <label htmlFor="search" className="block text-[#6f6f6f] mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#6f6f6f"
          className="w-6 h-6 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </label>
      <input
        id="search"
        type="search"
        className="w-full py-2 px-4 text-[#6f6f6f] rounded-lg focus:outline-none focus:shadow-outline mt-1 tracking-wide"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
