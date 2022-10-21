import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import '../styles/Nav.css';

interface handleProp{
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

function Nav(props:handleProp){

    const {clickHandler} = props;

    const [open, setOpen] = useState(false);

    const contentRef = useRef<any>(null);

    useEffect(()=>{
        const handleEvent = (e:any) => {
            if(!contentRef.current.contains(e.target)){
                setOpen(false);
            }
        };

        document.addEventListener("mousedown",handleEvent);

        return() => {
            document.removeEventListener("mousedown", handleEvent);
        }
    })

    return(
        <nav className ='nav-bar'>
            <div className ='nav-container'> 
                <button onClick={clickHandler}>open</button>
                <div className='nav-logo'>
                    <Link to='/'>
                        <h1>Shop Name</h1>
                    </Link>
                </div>
                <div className='dropdown' ref={contentRef}>
                    <button className='dropbtn' onClick={()=>{setOpen(state => !state)}}>Menu</button>
                    <div className={`drop-content ${open? 'active' : 'inactive'}`}>
                        <Link to='/about'><button>About</button></Link>
                        <Link to='/shop'><button>Shop</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;