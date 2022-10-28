import React from 'react';
import {Link} from 'react-router-dom';
import { useRef, useEffect } from 'react';
import '../styles/Sidebar.css';

interface openProp{
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    closeHandler: () => void,
    isOpen: boolean;
}

function Sidebar(props:openProp){

    const contentRef = useRef<any>(null); 

    useEffect(()=>{
        const handleEvent = (e:any) => {
            if(!contentRef.current.contains(e.target)){
                props.closeHandler();
            }
        };

        document.addEventListener("mousedown",handleEvent);

        return() => {
            document.removeEventListener("mousedown", handleEvent);
        }
    })

    return(
        <aside className={`sidebar ${props.isOpen?'active' : 'inactive'}`} ref={contentRef}>
            <button className='closebtn' onClick={props.clickHandler}>x</button>
            <Link to='/'><button onClick={props.closeHandler}>Home</button></Link>
            <Link to='/about'><button onClick={props.closeHandler}>About</button></Link>
            <Link to='/shop'><button onClick={props.closeHandler}>Shop</button></Link>    
        </aside>
    )
}

export default Sidebar;