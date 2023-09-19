import './SearchBar.css';
import React, { useState, useEffect, useRef } from 'react';
import searchIcon from '../fem-files/assets/images/icon-search.svg';

function SearchBar({ onValueChange }) {
    const [hasError, setHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('Whoops, can\'t be left empty...');

    const [inputValue, setInputValue] = useState('airplane');
    const timeoutRef = useRef(null);

    const getErrorElement = () => {
        if (hasError) {
            return <div className="error-msg mt-1">{errorMsg}</div>
        }
        return <div></div>;
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onValueChange(inputValue);
        }
    };

    useEffect(() => {
        // Fetch suggestions if the length of inputValue is a multiple of 3
        if (inputValue.length && inputValue.length % 3 === 0) {
            onValueChange(inputValue);
        }

        // Start a timer of 3 seconds when inputValue changes
        clearTimeout(timeoutRef.current);  // Clear the existing timer
        timeoutRef.current = setTimeout(() => {
            onValueChange(inputValue);
        }, 2000);
    }, [inputValue]);


    return (
        <div className='search-bar-wrapper'>
            <div className="search-bar">
                <input
                    data-haserror={hasError}
                    className="search-input"
                    type="text"
                    placeholder="Search for any word..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <img src={searchIcon} className="search-icon"></img>
            </div>
            {getErrorElement()}
        </div>

    );
}

export default SearchBar;