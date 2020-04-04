import React from 'react';
import './Search.css'
import Happy from './Happy.js';

const Search = props => {

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSubmitting();
    }

    return (
        <div>

            <Happy />

            <form onSubmit={onSubmit} className="container">

                <input className="search-bar"
                    type="text"
                    placeholder="Enter search term ..."
                    onChange={event => props.onSearching(event.target.value)}
                />
                <div className="btns">


                    <button className="btn1"
                        disabled={props.isFetching}
                    >
                        Search
                        </button>

                    <button className="btn2"
                        onClick={props.onFetching}
                        disabled={props.isFetching}
                    >
                        I'm feeling lucky !
                  </button>
                </div>
            </form>
        </div>
    );
};


export default Search
