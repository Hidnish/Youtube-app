import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        onFormSubmit(term);
    }

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">Search for a video</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={e => setTerm(e.target.value)}>
                    </input>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;