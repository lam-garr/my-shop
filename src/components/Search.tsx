import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import '../styles/Search.css';

function Search(){

    const [searchParams] = useSearchParams();

    const searchQuery:string | null = searchParams.get('q');

    return(
        <div>
            <h1>
                Search Results for "{searchQuery}"
            </h1>
            <section className='items-container'>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </section>
        </div>
    )
}

export default Search;