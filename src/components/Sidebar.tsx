import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../styles/Sidebar.css';

interface openProp{
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isOpen: boolean;
}

function Sidebar(props:openProp){

    const {clickHandler, isOpen} = props;

    return(
        <aside className={`sidebar ${isOpen?'active' : 'inactive'}`}>
            <button className='closebtn' onClick={clickHandler}>x</button>
            <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/shop'><button>Shop</button></Link>
        </aside>
    )
}

export default Sidebar;