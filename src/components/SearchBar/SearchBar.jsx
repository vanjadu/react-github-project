import React, { useRef } from 'react';
import './SearchBar.scss';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setUserInput }) => {
  const input = useRef(null);

  const clickHandler = () => {
    setUserInput(input.current.value);
    input.current.value = '';
  };

  return (
    <div className="search-bar">
      <label htmlFor="search" className="search-bar__label">
        <button onClick={clickHandler} className="search-bar__btn">
          <FaSearch className="search-bar__icon" />
        </button>
        <input
          ref={input}
          type="text"
          name="search"
          id="search"
          placeholder="Search Users..."
          spellCheck={false}
          autoFocus={true}
          className="search-bar__input"
        />
      </label>
    </div>
  );
};

export default SearchBar;
