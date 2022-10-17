import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import '../styles/Nav.css';

function Nav(){

    const [open, setOpen] = useState(false);

    return(
        <nav className = "nav-bar">
            <div className='nav-container'>  
                <div className='nav-logo'>
                    <Link to='/'>
                        <h1>Shop Name</h1>
                    </Link>
                </div>
                <div className='dropdown'>
                    <button className='dropbtn' onClick={()=>{setOpen(state => !state)}}>Menu</button>
                    <div className={`drop-content ${open? 'active' : 'inactive'}`}>
                        <button><Link to='/about'>About</Link></button>
                        <button><Link to='/shop'>Shop</Link></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;