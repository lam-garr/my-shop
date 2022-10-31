import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import '../styles/Searchbar.css';

interface openProp{
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    closeHandler: () => void,
    isOpen: boolean;
}

function Searchbar(props:openProp) {

    const {clickHandler, closeHandler, isOpen} = props;

    const [input, setInput] = useState('');

    const searchbarRef = useRef<any>(null);

    const inputRef = useRef<any>();

    const navigate = useNavigate();

    const goToResults = (e:any) => {
        e.preventDefault();

        if(input===''){
            return;
        }

        closeHandler();
        clear();

        const searchQuery = input.replace(/\s+/g,'+');

        navigate({
            pathname: '/search',
            search: `?q=${searchQuery}`,
        });
    }

    const changeInput = (event:any) => {
        setInput(event.target.value);
    }

    const clear = () => {
        setInput('');
    }

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

    useEffect(()=>{
        if(inputRef){
            inputRef.current.focus();
        }
    })

    return(
        <nav className={`search-container ${isOpen?'active':'inactive'}`} ref={searchbarRef}>
            <div className='left'></div>
            <div className='middle'>
                <form>
                    <input className='search-input' type='text' aria-label='search field' placeholder='Search...' value={input} onChange={changeInput} ref={inputRef} required/>
                        <button className={`search-button`} aria-label='submit search' onClick={goToResults}>
                            search
                        </button>
                </form>
            </div>
            <div className='right'>
                <button className='close-button' onClick={clickHandler}>X</button>
            </div>
        </nav>
    )
}

export default Searchbar;

//const params = {}
//search: `?${createSearchParams(search)}`