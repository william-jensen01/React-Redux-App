import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchTronaldDump } from '../actions';

const SearchForm = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setSearchTerm('');
        props.searchTronaldDump(searchTerm);
    };

    return (
        <div className="search">
            <input value={searchTerm} onChange={handleChange} placeholder="Enter a person, word, or phrase" />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default connect ( () => {
    return {};
},
{ searchTronaldDump }
)(SearchForm)