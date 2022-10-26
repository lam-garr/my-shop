import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import '../styles/Searchbar.css';

interface openProp{
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    closeHandler: () => void,
    isOpen: boolean;
}

function Searchbar(props:openProp) {

    const {clickHandler, closeHandler, isOpen} = props;

    const searchbarRef = useRef<any>(null);

    useEffect(()=>{
        const handleEvent = (e:any) => {
            if(!searchbarRef.current.contains(e.target)){
                closeHandler();
            }
        };

        document.addEventListener('mousedown', handleEvent);

        return() => {
            document.removeEventListener('mousedown', handleEvent);
        }
    })

    return(
        <nav className={`search-container ${isOpen?'active':'inactive'}`} ref={searchbarRef}>
            <div className='left'></div>
            <div className='middle'>
                <input autoFocus className='search-input' type='text' aria-label='search field' placeholder='Search...'/>
                <button className='search-button' aria-label='submit search'>
                    search
                </button>
            </div>
            <div className='right'>
                <button className='close-button' onClick={clickHandler}>x</button>
            </div>
        </nav>
    )
}

export default Searchbar;
