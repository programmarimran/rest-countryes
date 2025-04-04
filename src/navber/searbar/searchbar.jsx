import React from 'react';

const Searchbar = () => {
    // const nameCountry=fetch("https://restcountries.com/v3.1/name/{keyup}")
    return (
        <div>
             <input id='search' type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
    );
};

export default Searchbar;