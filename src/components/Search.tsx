import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Search.css';

function Search(){

    const [searchParams] = useSearchParams();

    const searchQuery:string | null = searchParams.get('q');

    return(
        <div>
            <h1>
                Search Results for "{searchQuery}"
            </h1>
        </div>
    )
}

export default Search;