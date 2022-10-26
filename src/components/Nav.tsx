import React from 'react';
import Searchbar from './Searchbar';
import {Link} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import '../styles/Nav.css';

interface handleProp{
    sidebarClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    searchbarClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

function Nav(props:handleProp){

    const {sidebarClickHandler, searchbarClickHandler} = props;

    return(
        <nav className ='nav-bar'>
            <div className ='nav-container'> 
                <button onClick={sidebarClickHandler}>open</button>
                <div className='nav-logo'>
                    <Link to='/'>
                        <h1>Shop Name</h1>
                    </Link>
                </div> 
                <button onClick={searchbarClickHandler}>search</button>
            </div>
        </nav>
    )
}

export default Nav;